'use client';
import { client } from "@/app/client";
import { CROWDFUNDING_FACTORY } from "@/app/constants/contracts";
import { holesky } from "@/app/constants/holesky";
import { MyCampaignCard } from "@/components/MyCampaignCard";
import { useState } from "react";
import { getContract } from "thirdweb";
import { deployPublishedContract } from "thirdweb/deploys";
import { useActiveAccount, useReadContract } from "thirdweb/react"


export default function DashboardPage() {
    const account = useActiveAccount();
    
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const contract = getContract({
        client: client,
        chain: holesky,
        address: CROWDFUNDING_FACTORY,
    });

    // Get Campaigns
    const { data: myCampaigns, isLoading: isLoadingMyCampaigns, refetch } = useReadContract({
        contract: contract,
        method: "function getUserCampaigns(address _user) view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
        params: [account?.address as string]
    });
    
    return (
        <div className="text-white mx-auto max-w-7xl px-4 mt-16 sm:px-6 lg:px-8">
            <div className="flex flex-row justify-between items-center mb-8">
                <p className="text-4xl font-semibold">Panel</p>
                <button
                    className="px-4 py-2 bg-indigo-500 text-white rounded-md"
                    onClick={() => setIsModalOpen(true)}
                >Crear Campaña</button>
            </div>
            <p className="text-2xl font-semibold mb-4">Mis campañas:</p>
            <div className="grid grid-cols-3 gap-4">
                {!isLoadingMyCampaigns && (
                    myCampaigns && myCampaigns.length > 0 ? (
                        myCampaigns.map((campaign, index) => (
                            <MyCampaignCard
                                key={index}
                                contractAddress={campaign.campaignAddress}
                            />
                        ))
                    ) : (
                        <p>No hay campañas</p>
                    )
                )}
            </div>
            
            {isModalOpen && (
                <CreateCampaignModal
                    setIsModalOpen={setIsModalOpen}
                    refetch={refetch}
                />
            )}
        </div>
    )
}

type CreateCampaignModalProps = {
    setIsModalOpen: (value: boolean) => void
    refetch: () => void
}

const CreateCampaignModal = (
    { setIsModalOpen, refetch }: CreateCampaignModalProps
) => {
    const account = useActiveAccount();
    const [isDeployingContract, setIsDeployingContract] = useState<boolean>(false);
    const [campaignName, setCampaignName] = useState<string>("");
    const [campaignDescription, setCampaignDescription] = useState<string>("");

    const [campaignImgUrl, setCampaignImgUrl] = useState<string>("");
    const [campaignGoal, setCampaignGoal] = useState<number>(1);
    const [campaignDeadline, setCampaignDeadline] = useState<number>(1);
    
    // Deploy contract from CrowdfundingFactory
    const handleDeployContract = async () => {
        setIsDeployingContract(true);
        try {
            console.log("Deploying contract...");
            const contractAddress = await deployPublishedContract({
                client: client,
                chain: holesky,
                account: account!,
                contractId: "ElmoCrowdfunding",
                contractParams: [
                    campaignName,
                    campaignDescription,
                    campaignImgUrl,
                    campaignGoal,
                    campaignDeadline
                ],
                publisher: "0xa65FA62c682F00A8D877bA7Db138E303660E29Fa",
                version: "1.0.2",
            });
            alert("Contract deployed successfully!");
        } catch (error) {
            console.error(error);
        } finally {
            setIsDeployingContract(false);
            setIsModalOpen(false);
            refetch
        }
    };

    const handleCampaignGoal = (value: number) => {
        if (value < 1) {
            setCampaignGoal(1);
        } else {
            setCampaignGoal(value);
        }
    }

    const handleCampaignLengthhange = (value: number) => {
        if (value < 1) {
            setCampaignDeadline(1);
        } else {
            setCampaignDeadline(value);
        }
    }

    return (
        <div className="fixed inset-0 bg-zinc-900 bg-opacity-75 flex justify-center items-center backdrop-blur-md">
            <div className="w-1/2 bg-zinc-800 p-6 rounded-md">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-semibold text-white">Crear una campaña</p>
                    <button
                        className="text-sm px-4 py-2 bg-slate-600 text-white rounded-md"
                        onClick={() => setIsModalOpen(false)}
                    >Cerrar</button>
                </div>
                <div className="flex flex-col">
                    <label className="text-white">Nombre de la campaña:</label>
                    <input 
                        type="text" 
                        value={campaignName}
                        onChange={(e) => setCampaignName(e.target.value)}
                        placeholder="Nombre de la campaña"
                        className="mb-4 px-4 py-2 bg-zinc-700 text-white rounded-md"
                    />
                    <label className="text-white">Descripción de la campaña:</label>
                    <textarea
                        value={campaignDescription}
                        onChange={(e) => setCampaignDescription(e.target.value)}
                        placeholder="Descripción de la campaña"
                        className="mb-4 px-4 py-2 bg-zinc-700 text-white rounded-md"
                    ></textarea>
                    <label className="text-white">Imagen de la campaña:</label>
                    <input 
                        type="text" 
                        value={campaignImgUrl}
                        onChange={(e) => setCampaignImgUrl(e.target.value)}
                        placeholder="Imagen de la campaña"
                        className="mb-4 px-4 py-2 bg-zinc-700 text-white rounded-md"
                    />
                    <label className="text-white">Objetivo de la campaña:</label>
                    <input 
                        type="number"
                        value={campaignGoal}
                        onChange={(e) => handleCampaignGoal(parseInt(e.target.value))}
                        className="mb-4 px-4 py-2 bg-zinc-700 text-white rounded-md"
                    />
    
                    <label className="text-white">Duración de la campaña (días):</label>
                    <input 
                                type="number"
                                value={campaignDeadline}
                                onChange={(e) => handleCampaignLengthhange(parseInt(e.target.value))}
                                className="mb-4 px-4 py-2 bg-zinc-700 text-white rounded-md"
                            />
           
                    <button
                        className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md"
                        onClick={handleDeployContract}
                    >{
                        isDeployingContract ? "Creando Campaña..." : "Crear Campaña"
                    }</button>
                </div>
            </div>
        </div>
    )
    
    
}