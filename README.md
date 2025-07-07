<div align="center">  
  <h1>amFOSS Events</h1>  
  <p>A centralized repository for landing pages of latest amFOSS events</p>  
</div>  
  
---  
  
amFOSS Events serves as the centralized repository and entry point for all recent and upcoming events organized by amFOSS. It hosts the source code and content for the landing pages of events, allowing members to manage, update, and track event-related materials in a version-controlled environment.  
  
# Tech Stack  
  
- **Frontend:**    
  - [React](https://react.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Next.js](https://nextjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  
# How It Works  
  
- Each **event** gets its own configured landing page with registration forms and event details  
- **Registration data** is stored through external APIs connected to spreadsheet backends  
- The platform includes **fallback mechanisms** to ensure pages load even when JavaScript fails [6](#4-5)   
  
---  
  
# Getting Started  
  
## Prerequisites  
  
- Node.js (v16 or higher recommended)  
- npm or yarn  
  
## Installation & Running  
  
1. **Clone this repository:**  
    ```sh  
    git clone https://github.com/naveen28204280/hacktober-2024-archive.git  
    cd hacktober-2024-archive  
    ```  

2. **Start the development server:**  
    ```sh  
    npm start  
    ```

# Event Configuration  
  
Each event can be configured by:  
  
- **Content Updates:** Modify components in `src/components/` for event-specific information [7](#4-6)   
- **Styling:** Update CSS and Tailwind classes for event branding  
- **Registration Logic:** Configure API endpoints and validation rules in registration forms  
- **Assets:** Replace images and logos in `public/assets/` directory  
  
---  
  
# Contributing  
  
## Adding New Events  
  
1. Fork the repository for the new event  
2. Update content in components  
3. Configure registration endpoints and validation  
4. Test and submit pull request  
  
## Reporting Issues  
  
Create issues with:  
* **Event Context:** Which event the issue affects  
* **Description:** Detailed problem description    
* **Steps to Reproduce:** Clear reproduction steps  
* **Environment:** Browser, device, and other relevant details  
  
---  
  
# Deployment  
  
Events are automatically deployed via GitHub Actions: [8](#4-7)   
  
1. **Automatic:** Push to main branch triggers deployment  
2. **Manual:** Run `npm run deploy` for immediate deployment  
3. **Custom Domains:** Configure in repository settings  