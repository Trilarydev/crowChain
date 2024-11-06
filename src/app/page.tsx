'use client';
import { useReadContract } from "thirdweb/react";
import { client } from "./client";
import { getContract } from "thirdweb";
import { CampaignCard } from "@/components/CampaignCard";
import { CROWDFUNDING_FACTORY } from "./constants/contracts";
import { holesky } from "./constants/holesky";

export default function Home() {
  // Get CrowdfundingFactory contract
  const contract = getContract({
    client: client,
    chain: holesky,
    address: CROWDFUNDING_FACTORY,
  });

  // Get all campaigns deployed with CrowdfundingFactory
  const {data: campaigns, isLoading: isLoadingCampaigns, refetch: refetchCampaigns } = useReadContract({
    contract: contract,
    method: "function getAllCampaigns() view returns ((address campaignAddress, address owner, string name)[])",
    params: []
  });

  return (
    <main className="mx-auto max-w-7xl px-4 mt-4 sm:px-6 lg:px-8">
      <div className="py-10">
        <h1 className="text-4xl font-bold text-white mb-4">Campañas:</h1>
        <div className="grid grid-cols-3 gap-4">
          {!isLoadingCampaigns && campaigns && (
            campaigns.length > 0 ? (
              campaigns.map((campaign) => (
                <CampaignCard
                  key={campaign.campaignAddress}
                  campaignAddress={campaign.campaignAddress}
                />
              ))
            ) : (
              <p>Sin campañas</p>
            )
          )}
        </div>
      </div>
    </main>
  );
}
