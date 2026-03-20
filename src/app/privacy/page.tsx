export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0E031C]">
      <style>{`* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            /* Official Havitah Brand Colors */
            --primary: #A055FF;
            --primary-dark: #7600D5;
            --primary-light: #B070FF;
            --secondary: #F2994A;
            --secondary-light: #FFBF40;
            --secondary-dark: #E67E22;
            
            /* Background Colors */
            --bg-start: #210347;
            --bg-end: #0E031C;
            --dark: #0E031C;
            --dark-light: #1C1C1E;
            --card-bg: rgba(44, 44, 46, 0.8);
            --card-border: rgba(255, 255, 255, 0.08);
            
            /* Text Colors */
            --text: #F2F2F7;
            --text-secondary: #AEAEB2;
            --text-tertiary: #8E8E93;
            --text-muted: #8E8E93;
            
            /* Gradients */
            --gradient: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--primary-light) 100%);
            --gradient-text: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 25%, var(--primary-light) 50%, var(--secondary-light) 75%, var(--primary) 100%);
            --bg-gradient: radial-gradient(circle at 25% 25%, var(--primary) 0%, transparent 50%), 
                          radial-gradient(circle at 75% 75%, var(--secondary) 0%, transparent 50%),
                          radial-gradient(circle at 50% 0%, var(--primary-light) 0%, transparent 50%);
        }

        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(var(--bg-start), var(--bg-end));
            color: var(--text);
            overflow-x: hidden;
            line-height: 1.6;
            min-height: 100vh;
        }

        /* Animated Background */
        .cosmic-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            background: var(--bg-gradient);
            animation: cosmic-drift 20s ease-in-out infinite;
            filter: blur(80px);
            opacity: 0.6;
        }

        @keyframes cosmic-drift {
            0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
            25% { transform: translateX(-20px) translateY(-20px) rotate(1deg); }
            50% { transform: translateX(20px) translateY(-10px) rotate(-1deg); }
            75% { transform: translateX(-10px) translateY(20px) rotate(0.5deg); }
        }

        /* Header */
        .header {
            background: rgba(26, 26, 26, 0.7);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--card-border);
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .logo {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.8rem;
            font-weight: 800;
            background: var(--gradient-text);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-decoration: none;
        }

        .back-link {
            color: var(--text-secondary);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: color 0.3s ease;
        }

        .back-link:hover {
            color: var(--primary);
        }

        /* Main Container */
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
            min-height: calc(100vh - 100px);
        }

        /* Privacy Policy Content */
        .privacy-content {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 24px;
            padding: 3rem;
            backdrop-filter: blur(20px);
            margin-bottom: 2rem;
        }

        .privacy-title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 2.5rem;
            font-weight: 800;
            text-align: center;
            margin-bottom: 1rem;
            background: var(--gradient-text);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .privacy-meta {
            text-align: center;
            color: var(--text-secondary);
            margin-bottom: 3rem;
            font-size: 0.9rem;
        }

        .section-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text);
            margin: 2.5rem 0 1rem 0;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--card-border);
        }

        .subsection-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--primary-light);
            margin: 2rem 0 1rem 0;
        }

        .privacy-content p {
            margin-bottom: 1rem;
            line-height: 1.7;
            color: var(--text);
        }

        .privacy-content ul {
            margin: 1rem 0 1rem 1.5rem;
            color: var(--text);
        }

        .privacy-content li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
        }

        .privacy-content strong {
            color: var(--primary-light);
            font-weight: 600;
        }

        .contact-info {
            background: rgba(160, 85, 255, 0.1);
            border: 1px solid rgba(160, 85, 255, 0.2);
            border-radius: 16px;
            padding: 2rem;
            margin-top: 2rem;
            text-align: center;
        }

        .contact-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--primary-light);
            margin-bottom: 1rem;
        }

        .contact-email {
            color: var(--secondary);
            font-weight: 600;
            text-decoration: none;
            font-size: 1.1rem;
        }

        .contact-email:hover {
            text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }

            .privacy-content {
                padding: 2rem;
            }

            .privacy-title {
                font-size: 2rem;
            }

            .section-title {
                font-size: 1.3rem;
            }

            .subsection-title {
                font-size: 1.1rem;
            }

            .header-content {
                padding: 0 1rem;
            }
        }

        @media (max-width: 480px) {
            .privacy-content {
                padding: 1.5rem;
            }

            .privacy-title {
                font-size: 1.8rem;
            }
        }`}</style>
      <div dangerouslySetInnerHTML={{ __html: `<div class="cosmic-bg"></div>

    <!-- Header -->
    <header class="header">
        <div class="header-content">
            <a href="/" class="logo">Havitah</a>
            <a href="/" class="back-link">
                <i class="fas fa-arrow-left"></i>
                Back to Home
            </a>
        </div>
    </header>

    <!-- Main Content -->
    <div class="container">
        <div class="privacy-content">
            <h1 class="privacy-title">HAVITAH PRIVACY POLICY</h1>
            
            <div class="privacy-meta">
                <p><strong>Last Updated:</strong> 20/09/2025</p>
                <p><strong>Effective Date:</strong> 20/09/2025</p>
            </div>

            <h2 class="section-title">1. INTRODUCTION</h2>
            <p>Welcome to Havitah, a next-generation event discovery, engagement, and ticketing platform that seamlessly combines social interaction with event planning. This Privacy Policy explains how Havitah Technologies Limited ("we," "us," "our," or "Havitah") collects, uses, processes, shares, and protects your personal information when you use our mobile application, web platform, and related services (collectively, the "Service").</p>
            
            <p>By using Havitah, you consent to the collection, use, and processing of your personal information as described in this Privacy Policy. If you do not agree with our practices, please do not use our Service.</p>

            <h2 class="section-title">2. INFORMATION WE COLLECT</h2>
            
            <h3 class="subsection-title">2.1 Personal Information You Provide</h3>
            <p><strong>Account Registration Information:</strong></p>
            <ul>
                <li>Full name (first name, last name)</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Password (encrypted and stored securely)</li>
                <li>Display name and username</li>
                <li>Profile picture/display image</li>
                <li>Date of birth</li>
                <li>User role selection (Normal User, Event Planner)</li>
            </ul>

            <p><strong>Profile Information:</strong></p>
            <ul>
                <li>Bio/description</li>
                <li>Location/address information</li>
                <li>Social media links</li>
            </ul>

            <p><strong>Event Creation & Management:</strong></p>
            <ul>
                <li>Event titles, descriptions, and details</li>
                <li>Event locations, dates, and scheduling information</li>
                <li>Recurring event settings</li>
                <li>Pricing and ticketing information</li>
                <li>Event media (photos, videos, documents)</li>
                <li>Promotional materials and marketing content</li>
            </ul>

            <p><strong>Communication Data:</strong></p>
            <ul>
                <li>Messages sent through our in-app messaging system</li>
                <li>Comments, posts, and interactions on event feeds</li>
                <li>Reviews and ratings for events</li>
                <li>Customer support correspondence</li>
                <li>Feedback and survey responses</li>
            </ul>

            <h3 class="subsection-title">2.2 Information Collected Automatically</h3>
            <p><strong>Device Information:</strong></p>
            <ul>
                <li>Device type and model</li>
                <li>Operating system and version</li>
                <li>App version and build information</li>
                <li>Device identifiers (UUID, IMEI when permitted)</li>
                <li>Screen resolution and device specifications</li>
                <li>Browser type and version (for web users)</li>
            </ul>

            <p><strong>Usage Analytics:</strong></p>
            <ul>
                <li>Pages/screens visited within the app</li>
                <li>Features used and interaction patterns</li>
                <li>Time spent on different sections</li>
                <li>Search queries and browsing history</li>
                <li>Click-through rates and engagement metrics</li>
                <li>Session duration and frequency of use</li>
            </ul>

            <p><strong>Location Data:</strong></p>
            <ul>
                <li>Precise GPS coordinates (when location services are enabled)</li>
                <li>IP address-based location estimation</li>
                <li>Event venue locations you search for or visit</li>
                <li>Travel patterns related to event attendance</li>
                <li>Location-based event recommendations data</li>
            </ul>

            <h2 class="section-title">3. HOW WE USE YOUR INFORMATION</h2>
            
            <h3 class="subsection-title">3.1 Core Service Functionality</h3>
            <p><strong>Account Management:</strong></p>
            <ul>
                <li>Create and maintain user accounts</li>
                <li>Authenticate users and secure account access</li>
                <li>Provide personalized user experiences</li>
                <li>Enable role-based features (Event Planner, Normal User)</li>
                <li>Facilitate account recovery and password reset</li>
            </ul>

            <p><strong>Event Features:</strong></p>
            <ul>
                <li>Enable event creation, discovery, and management</li>
                <li>Support event registration and attendance tracking</li>
                <li>Generate QR codes for event entry verification</li>
                <li>Send event reminders and notifications</li>
                <li>Manage recurring event scheduling</li>
            </ul>

            <p><strong>Social Features:</strong></p>
            <ul>
                <li>Enable social interactions (comments, likes, shares)</li>
                <li>Create and curate event-specific social feeds</li>
                <li>Support "Havitah Reels" short-form video content</li>
                <li>Calculate and display "Havitah Waves" trending metrics</li>
                <li>Facilitate user connections and networking</li>
            </ul>

            <h2 class="section-title">4. INFORMATION SHARING AND DISCLOSURE</h2>
            
            <h3 class="subsection-title">4.1 Public Information</h3>
            <p>Certain information you provide is public by default:</p>
            <ul>
                <li>Event listings and basic event information</li>
                <li>Public posts, comments, and interactions on event feeds</li>
                <li>Public reviews and ratings</li>
                <li>Profile information you choose to make public</li>
                <li>"Havitah Reels" videos and content you share publicly</li>
            </ul>

            <h3 class="subsection-title">4.2 Other Havitah Users</h3>
            <p>We share limited information with other users to enable platform functionality:</p>
            <ul>
                <li>Basic profile information when you interact with events or users</li>
                <li>Event attendee information (name only) to event organizers</li>
                <li>Message content through our secure messaging system</li>
                <li>Public activity related to events you attend or organize</li>
            </ul>

            <h2 class="section-title">5. DATA SECURITY</h2>
            
            <h3 class="subsection-title">5.1 Technical Safeguards</h3>
            <p><strong>Encryption:</strong></p>
            <ul>
                <li>Data encrypted in transit using TLS 1.3</li>
                <li>Data encrypted at rest using AES-256 encryption</li>
                <li>End-to-end encryption for sensitive communications</li>
                <li>Encrypted database storage and backups</li>
            </ul>

            <p><strong>Access Controls:</strong></p>
            <ul>
                <li>Multi-factor authentication for all administrative access</li>
                <li>Role-based access controls with principle of least privilege</li>
                <li>Regular access reviews and permission audits</li>
                <li>Secure API endpoints with rate limiting</li>
            </ul>

            <h2 class="section-title">6. YOUR PRIVACY RIGHTS</h2>
            
            <h3 class="subsection-title">6.1 Universal Rights (All Users)</h3>
            <ul>
                <li><strong>Access:</strong> Request a copy of personal data we hold about you</li>
                <li><strong>Correction:</strong> Update or correct inaccurate personal information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (with certain exceptions)</li>
                <li><strong>Portability:</strong> Receive your data in a structured, commonly used format</li>
                <li><strong>Objection:</strong> Object to certain types of data processing</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for data processing based on consent</li>
            </ul>

            <h2 class="section-title">7. DATA RETENTION</h2>
            <p><strong>Active Account Data:</strong> User profile information retained for the lifetime of your account plus 30 days after account deletion. Event data retained for 24 months after event date for historical records. Communication data retained for 18 months or until account deletion.</p>
            
            <p><strong>Deleted Account Data:</strong> Immediate deletion of profile information, personal messages, and account access credentials. 30-day grace period for account recovery. Anonymized analytics data and public event information that doesn't personally identify you may be retained.</p>

            <h2 class="section-title">8. INTERNATIONAL DATA TRANSFERS</h2>
            <p>Havitah operates globally and may transfer your data internationally:</p>
            <ul>
                <li><strong>Primary Data Centers:</strong> United States (AWS US-East)</li>
                <li><strong>Secondary Locations:</strong> Europe (AWS EU-West) and Asia-Pacific (AWS Asia-Pacific)</li>
                <li><strong>Third-Party Services:</strong> May involve data processing in various countries</li>
            </ul>

            <h2 class="section-title">9. CHILDREN'S PRIVACY</h2>
            <p><strong>Minimum Age:</strong> Havitah requires users to be at least 16 years old.</p>
            <p><strong>Verification:</strong> Age verification during account registration.</p>
            <p><strong>Parental Consent:</strong> Users under 18 may require parental consent in some jurisdictions.</p>

            <h2 class="section-title">10. UPDATES TO THIS PRIVACY POLICY</h2>
            <p><strong>Material Changes:</strong> Users notified via email and in-app notifications.</p>
            <p><strong>Implementation:</strong> New policies take effect 30 days after notification.</p>
            <p><strong>Continued Use:</strong> Continued use after effective date constitutes acceptance.</p>

            <h2 class="section-title">11. JURISDICTION AND DISPUTES</h2>
            <p>This Privacy Policy is governed by the laws of Nigeria and applicable international data protection regulations.</p>
            
            <p>For dispute resolution, initial disputes are handled through customer service. Mediation is available for unresolved issues. Users may file complaints with relevant data protection authorities, and court jurisdiction is as specified in our Terms of Service.</p>

            <div class="contact-info">
                <h3 class="contact-title">Contact Information</h3>
                <p><strong>Data Protection Officer:</strong></p>
                <a href="mailto:info@havitah.com" class="contact-email">info@havitah.com</a>
                <p style="margin-top: 1rem; color: var(--text-secondary);">
                    <strong>Address:</strong><br>
                    Havitah Tech Limited,7 Progress Avenue, Oloko, Sango-Ota, Ogun State, Nigeria
                </p>
                <p style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.9rem;">
                    Response Time: 72 hours for standard inquiries
                </p>
            </div>

            <p style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--card-border); font-style: italic; color: var(--text-secondary);">
                By using Havitah, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
        </div>
    </div>` }} />
    </main>
  );
}
