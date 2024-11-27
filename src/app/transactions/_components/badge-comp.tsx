import { Transaction, TransactionType } from "@prisma/client";
import { Badge, CircleIcon } from "lucide-react";

interface TransactionBadgeProps {
  transaction: Transaction;
}

const TransactionBadge = ({ transaction }: TransactionBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge>
        <CircleIcon className="fill-primary mr-2" size={10} /> Deposito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge>
        {" "}
        <CircleIcon className="fill-primary mr-2" size={10} /> Despesa
      </Badge>
    );
  }
  if (transaction.type === TransactionType.INVESTMENT) {
    return (
      <Badge>
        {" "}
        <CircleIcon className="fill-primary mr-2" size={10} /> Investimento
      </Badge>
    );
  }
};
export default TransactionBadge;
