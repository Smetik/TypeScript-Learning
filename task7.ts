type CardPayment = { type: 'card'; cardNumber: string; amount: number };
type CashPayment = { type: 'cash'; amount: number };
type CryptoPayment = { type: 'crypto'; wallet: string; amount: number };
type Payment = CardPayment | CashPayment | CryptoPayment;


function isCardPayment(payment: Payment): payment is CardPayment {
    return "cardNumber" in payment;
}

function processPayment (payment:Payment): string {
    if (isCardPayment(payment)) {

        if (payment.cardNumber.startsWith("4")) {
            return "Visa payment";
        }

        return "Card payment";
    }

    if ("wallet" in payment) {
        return "Crypto not supported yet";
    }

    if (typeof payment.amount !== "number") {
        throw new Error ("Amount must be a number");
    }

    return "Cash payment";

}

const card1: CardPayment = {
    type: "card",
    cardNumber: "4123456789012345",
    amount: 100
};

const card2: CardPayment = {
    type: "card",
    cardNumber: "5123456789012345",
    amount: 200
};

const cash: CashPayment = {
    type: "cash",
    amount: 50
};

const crypto: CryptoPayment = {
    type: "crypto",
    wallet: "0xABC123",
    amount: 500
};

console.log(processPayment(card1));
console.log(processPayment(card2));
console.log(processPayment(cash));
console.log(processPayment(crypto));