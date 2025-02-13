function generateTips() {
    const queryType = document.getElementById('type').value;
    const queryText = document.getElementById('query').value;
    const tipsSection = document.getElementById('tips-section');

    if (!queryType || !queryText) {
        alert("Please fill in both fields.");
        return;
    }

    // Clear previous tips
    tipsSection.innerHTML = '';
    tipsSection.style.display = 'block';

    let tips = [];

    // Generate tips based on the selected query type
    switch (queryType) {
        case 'work':
            tips = [
                "Implement time tracking software for improved productivity.",
                "Encourage collaboration using project management tools.",
                "Adopt cloud storage solutions for better data accessibility."
            ];
            break;
        case 'business':
            tips = [
                "Incorporate blockchain for enhanced supply chain transparency.",
                "Utilize smart contracts to automate agreements.",
                "Adopt decentralized apps (dApps) for security improvements."
            ];
            break;
        case 'school/college':
            tips = [
                "Use blockchain to maintain an immutable record of academic achievements.",
                "Implement decentralized storage for student records.",
                "Incorporate smart contracts to automate scholarship distribution."
            ];
            break;
        case 'IT employee':
            tips = [
                "Enhance your security practices by using blockchain for secure data transactions.",
                "Leverage decentralized networks to reduce infrastructure costs.",
                "Implement blockchain solutions for enhanced version control in software development."
            ];
            break;
        case 'executive':
            tips = [
                "Use blockchain to enhance corporate governance and transparency.",
                "Implement blockchain for secure and transparent voting systems.",
                "Explore tokenization to incentivize employee performance."
            ];
            break;
        case 'entrepreneur':
            tips = [
                "Leverage blockchain for fundraising through tokenization.",
                "Implement smart contracts to streamline business operations.",
                "Adopt decentralized finance (DeFi) to optimize financial transactions."
            ];
            break;
        case 'consultant':
            tips = [
                "Provide clients with blockchain-based solutions for secure data sharing.",
                "Utilize blockchain to offer transparent project management systems.",
                "Recommend blockchain for client supply chain improvements."
            ];
            break;
        case 'analyst':
            tips = [
                "Use blockchain to enhance data verification and authenticity.",
                "Leverage blockchain technology to analyze real-time transaction data securely.",
                "Incorporate decentralized systems for improved data management."
            ];
            break;
        case 'accountant':
            tips = [
                "Use blockchain to maintain secure, transparent, and immutable financial records.",
                "Implement smart contracts to automate invoicing and payments.",
                "Leverage blockchain to improve audit trails and reduce discrepancies."
            ];
            break;
        case 'salesperson':
            tips = [
                "Incorporate blockchain to verify product authenticity for customers.",
                "Use blockchain-based loyalty programs to increase customer retention.",
                "Adopt blockchain to streamline payment processes securely."
            ];
            break;
        case 'marketer':
            tips = [
                "Leverage blockchain to increase transparency in digital advertising.",
                "Implement blockchain for secure data sharing in targeted marketing.",
                "Use blockchain-based loyalty tokens to drive engagement."
            ];
            break;
        case 'strategist':
            tips = [
                "Incorporate blockchain in long-term data security strategies.",
                "Leverage blockchain for future-proofing your company's digital assets.",
                "Use blockchain to create secure, decentralized systems for competitive advantage."
            ];
            break;
        case 'innovator':
            tips = [
                "Explore blockchain applications for intellectual property protection.",
                "Leverage blockchain to create new business models based on decentralization.",
                "Adopt blockchain in innovation processes to enhance transparency and collaboration."
            ];
            break;
        case 'recruiter':
            tips = [
                "Use blockchain for verifying candidate credentials securely.",
                "Adopt blockchain-based platforms for fair and transparent hiring processes.",
                "Leverage decentralized networks for global talent recruitment."
            ];
            break;
        case 'supervisor':
            tips = [
                "Use blockchain to track and manage team productivity transparently.",
                "Incorporate decentralized tools for better team collaboration.",
                "Leverage blockchain for securing sensitive project data."
            ];
            break;
        case 'intern':
            tips = [
                "Explore blockchain-based certifications to enhance your skills.",
                "Use blockchain for securing project contributions and experiences.",
                "Leverage decentralized platforms for remote project collaborations."
            ];
            break;
        case 'trainee':
            tips = [
                "Utilize blockchain courses to learn decentralized systems.",
                "Adopt blockchain-based platforms to showcase your training progress.",
                "Explore blockchain tools for future project tracking."
            ];
            break;
        case 'specialist':
            tips = [
                "Incorporate blockchain in your expertise area for enhanced security.",
                "Use blockchain to offer decentralized solutions to clients.",
                "Leverage blockchain to develop niche-specific decentralized applications."
            ];
            break;
        case 'coordinator':
            tips = [
                "Implement blockchain for transparent project tracking.",
                "Use blockchain to manage decentralized teams more effectively.",
                "Leverage blockchain-based tools for better communication and accountability."
            ];
            break;
        case 'director':
            tips = [
                "Use blockchain for company-wide transparency in operations.",
                "Adopt blockchain for long-term strategic planning and risk management.",
                "Leverage decentralized networks for corporate governance."
            ];
            break;
        case 'vice-president':
            tips = [
                "Incorporate blockchain in strategic decision-making for better transparency.",
                "Use blockchain-based platforms to improve executive communication.",
                "Leverage blockchain for secure data handling across departments."
            ];
            break;
        case 'ceo':
            tips = [
                "Use blockchain to future-proof your company’s financial transactions.",
                "Incorporate decentralized systems for improved company transparency.",
                "Leverage blockchain for secure and transparent global business operations."
            ];
            break;
        case 'stakeholder':
            tips = [
                "Use blockchain to track company performance metrics transparently.",
                "Leverage decentralized finance to secure company investments.",
                "Adopt blockchain for transparent and secure shareholder voting."
            ];
            break;
        case 'shareholder':
            tips = [
                "Use blockchain for secure and transparent voting in shareholder meetings.",
                "Leverage blockchain to track investment performance in real-time.",
                "Adopt decentralized systems to monitor the company’s financial health."
            ];
            break;
        case 'other':
            tips = [
                "Explore blockchain for decentralized data management.",
                "Incorporate blockchain for enhancing system security.",
                "Leverage blockchain to improve transparency and accountability."
            ];
            break;
        default:
            tips = ["No specific tips available for the selected option."];
    }

    // Display the generated tips
    tips.forEach((tip, index) => {
        const tipBlock = document.createElement('div');
        tipBlock.classList.add('tip-block');
        tipBlock.innerHTML = `<strong>Tip ${index + 1}:</strong> ${tip}`;
        tipsSection.appendChild(tipBlock);
    });
}
