import { prepareContractCall, ThirdwebContract } from "thirdweb";
import { TransactionButton } from "thirdweb/react";

type Tier = {
    name: string;
    amount: bigint;
    backers: bigint;
};

type TierCardProps = {
    tier: Tier;
    index: number;
    contract: ThirdwebContract
    isEditing: boolean;
}

export const TierCard: React.FC<TierCardProps> = ({ tier, index, contract, isEditing }) => {
    return (
        <div className="max-w-sm flex flex-col justify-between p-6 bg-zinc-900 rounded-lg shadow">
            <div>
                <div className="flex flex-row justify-between items-center">
                    <p className="text-2xl font-semibold">{tier.name}</p>
                    <p className="text-2xl font-semibold">${tier.amount.toString()}</p>
                </div>
            </div>
            <div className="flex flex-row justify-between items-end">
                <p className="text-xs font-semibold">Total de patrocinadores: {tier.backers.toString()}</p>
                <TransactionButton
                    transaction={() => prepareContractCall({
                        contract: contract,
                        method: "function fund(uint256 _tierIndex) payable",
                        params: [BigInt(index)],
                        value: tier.amount,
                    })}
                    onError={(error) => alert(`Error: ${error.message}`)}
                    onTransactionConfirmed={async () => alert("Funded successfully!")}
                    style={{
                        marginTop: "1rem",
                        backgroundColor: "#6366F1",
                        color: "white",
                        padding: "0.5rem 1rem",
                        borderRadius: "0.375rem",
                        cursor: "pointer",
                    }}
                >Seleccionar</TransactionButton>
            </div>
            {isEditing && (
                <TransactionButton
                    transaction={() => prepareContractCall({
                        contract: contract,
                        method: "function removeTier(uint256 _index)",
                        params: [BigInt(index)],
                    })}
                    onError={(error) => alert(`Error: ${error.message}`)}
                    onTransactionConfirmed={async () => alert("Removed successfully!")}
                    style={{
                        marginTop: "1rem",
                        backgroundColor: "red",
                        color: "white",
                        padding: "0.5rem 1rem",
                        borderRadius: "0.375rem",
                        cursor: "pointer",
                    }}
                >Eliminar</TransactionButton>
            )}
        </div>
    )
};