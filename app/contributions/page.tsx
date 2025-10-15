import React from 'react';
import Image from 'next/image';
import '../globals.css';
import Footer from '../../components/Footer';
import '../../components/Header/Header.css';
import '../../components/footer.css';
import ParticleBackground from '../../components/ParticleBackground/ParticleBackground';
import './contributions.css';
import fs from 'fs';
import path from 'path';

interface PullRequest {
  id: number;
  number: number;
  title: string;
  state: string;
  user: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
  merged_at: string | null;
  body: string | null;
  labels: Array<{ name: string }>;
  html_url: string;
  readme_content?: string;
}

function loadPRData(): PullRequest[] {
  try {
    const filePath = path.join(process.cwd(), 'content', 'pr_data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    if (!fileContents || fileContents.trim() === '') {
      return [];
    }
    
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading PR data:', error);
    return [];
  }
}

function Contributions() {
  const prData = loadPRData();
  
  const contributions = prData.map((pr) => ({
    id: pr.id,
    title: pr.title,
    author: pr.user.login,
    avatarUrl: pr.user.avatar_url,
    repository: "Iron-56/First-issue-test",
    prNumber: pr.number,
    status: pr.merged_at ? "merged" : pr.state,
    date: new Date(pr.created_at).toISOString().split('T')[0],
    description: pr.body || "No description provided",
    labels: pr.labels.map(label => label.name),
    url: pr.html_url,
    readmeContent: pr.readme_content || null
  }));
  return (
    <div className="App scroll-container">
      <ParticleBackground />
      <div className="background">
        <div className="header">
          <div className="decorative-elements">
              <div className="float-element element-1">&#123;&#125;</div>
              <div className="float-element element-2">&lt;/&gt;</div>
              <div className="float-element element-3">&#123; &#125;</div>
              <div className="float-element element-4">[ ]</div>
              <div className="float-element element-5">&#60;&#62;</div>
              <div className="float-element element-6">( )</div>
          </div>

          <div className="header-top" >
              {/* <a href="https://hacktoberfest.com"><Image src="/assets/HF-Horizontal-Color-Light.svg" alt="amfoss logo" className="logo" width={250} height={250} /></a> */}
              <a href="https://amfoss.in"><Image src="/assets/amfoss_logo.png" alt="amfoss logo" className="logo" width={100} height={100} /></a>
              
              <a href="https://www.amrita.edu/campus/amritapuri/"><Image src="/assets/amrita_logo.png" alt="amrita logo" className="logo" width={100} height={100} /></a>
          </div>

          <div className="contributions-container">
            {/* <h1 className="contributions-title">Hacktoberfest Contributions</h1> */}
            <div className='title-container'>
              <Image src="/assets/HF-Horizontal-Color-Light.svg" alt="hacktoberfest logo" className="mainLogo" width={400} height={100} />
              <h3 className="contributions-subtitle">Track all the amazing contributions from our community</h3>
              
            </div>
            
            <div className="contributions-grid">
              {contributions.length > 0 ? (
                contributions.map((contribution) => (
                  <a key={contribution.id} className="contribution-card" href={contribution.url} target="_blank" rel="noopener noreferrer">
                    <div className="card-top">
                      <div className='author-info'>
                        <Image
                          src={contribution.avatarUrl} 
                          alt={contribution.author}
                          width={60}
                          height={60}
                          className="avatar-icon-large"
                        />
                        <p className="author-name">{contribution.author}</p>
                      </div>
                      <div className="card-header">
                        <div className="title-badge-container">
                          <h3 className="contribution-title">
                            {contribution.title.length > 10 
                              ? contribution.title.slice(0, 10) + "..."
                              : contribution.title} <span className="pr-number">
                              #{contribution.prNumber}
                            </span>
                          </h3>
                          <div className={`status-badge ${contribution.status}`}>
                            {contribution.status}
                          </div>
                        </div>
                        
                        <p className="contribution-description">
                          {contribution.description.length > 65
                            ? contribution.description.slice(0, 65) + "..."
                            : contribution.description}
                        </p>
                      </div>
                    </div>
                    {contribution.readmeContent && (
                      <div className="readme-preview">
                        <h4 className="readme-title">README Preview:</h4>
                        <pre className="readme-content">
                          {contribution.readmeContent.length > 200
                            ? contribution.readmeContent.slice(0, 200) + "..."
                            : contribution.readmeContent}
                        </pre>
                      </div>
                    )}
                  </a>
                ))
              ) : (
                <div className="no-contributions">
                  <p>No contributions yet. Be the first to contribute!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contributions;