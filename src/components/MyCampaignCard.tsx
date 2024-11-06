import { client } from "@/app/client";
import { holesky } from "@/app/constants/holesky";
import Link from "next/link";
import { getContract } from "thirdweb";
import { useReadContract } from "thirdweb/react";

type MyCampaignCardProps = {
    contractAddress: string;
};

export const MyCampaignCard: React.FC<MyCampaignCardProps> = ({ contractAddress }) => {
    const contract = getContract({
        client: client,
        chain: holesky,
        address: contractAddress,
    });

    // Get Campaign Name
    const { data: name } = useReadContract({
        contract, 
        method: "function name() view returns (string)", 
        params: []
    });

    const { data: description } = useReadContract({ 
        contract, 
        method: "function description() view returns (string)", 
        params: [] 
      });

      const { data: imgUrl } = useReadContract({ 
        contract, 
        method: "function imgUrl() view returns (string)", 
        params: [] 
      });


    return (
            <div className="flex flex-col justify-between max-w-sm p-6 bg-zinc-900 rounded-lg shadow">
                <div>
                <img src={imgUrl} alt="Campaign Image" />
                <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                </div>
                
                <Link
                    href={`/campaign/${contractAddress}`}
                    passHref={true}
                >
                    <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                    Ver campaña
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </p>
                </Link>
            </div>
    )
};