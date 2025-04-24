import "../components/molecules/Card.js";
import "../components/atoms/Service.js";

export function renderServices(container) {
    const services = [
        { service: "Haircut", details: "Detailed haircut (lineup included) with a straight razor shave.", price: "$25.00" },
        { service: "Beard Trim", details: "Beard trim and lineup with a straight razor shave.", price: "$15.00" },
        { service: "Shave", details: "Straight razor shave with hot towel.", price: "$20.00" },
    ];

    const card = document.createElement("card-component");

    services.forEach(({ service, details, price }) => {    
        const serviceComponent = document.createElement("service-component");
        serviceComponent.setAttribute("service", service);
        serviceComponent.setAttribute("details", details);
        serviceComponent.setAttribute("price", price);
        card.appendChild(serviceComponent);
    });

    container.appendChild(card);
}