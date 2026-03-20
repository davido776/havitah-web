export default function TermsConditions() {
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

        /* Terms Content */
        .terms-content {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 24px;
            padding: 3rem;
            backdrop-filter: blur(20px);
            margin-bottom: 2rem;
        }

        .terms-title {
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

        .terms-meta {
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

        .terms-content p {
            margin-bottom: 1rem;
            line-height: 1.7;
            color: var(--text);
        }

        .terms-content ul {
            margin: 1rem 0 1rem 1.5rem;
            color: var(--text);
        }

        .terms-content li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
        }

        .terms-content strong {
            color: var(--primary-light);
            font-weight: 600;
        }

        .highlight-box {
            background: rgba(160, 85, 255, 0.1);
            border: 1px solid rgba(160, 85, 255, 0.2);
            border-radius: 16px;
            padding: 1.5rem;
            margin: 1.5rem 0;
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

            .terms-content {
                padding: 2rem;
            }

            .terms-title {
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
            .terms-content {
                padding: 1.5rem;
            }

            .terms-title {
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
        <div class="terms-content">
            <h1 class="terms-title">HAVITAH TERMS AND CONDITIONS</h1>
            
            <div class="terms-meta">
                <p><strong>Last Updated:</strong> 20/09/2025</p>
                <p><strong>Effective Date:</strong> 20/09/2025</p>
            </div>

            <h2 class="section-title">1. ACCEPTANCE OF TERMS</h2>
            
            <h3 class="subsection-title">1.1 Agreement to Terms</h3>
            <p>Welcome to Havitah! These Terms and Conditions ("Terms") constitute a legally binding agreement between you and Havitah Technologies Limited ("Havitah," "we," "us," or "our") governing your access to and use of the Havitah mobile application, website, and all related services (collectively, the "Platform" or "Service").</p>
            
            <p>By creating an account, accessing, or using any part of the Havitah Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy, which is incorporated herein by reference.</p>

            <h3 class="subsection-title">1.2 Changes to Terms</h3>
            <p>We reserve the right to modify, amend, or update these Terms at any time. Material changes will be communicated through:</p>
            <ul>
                <li>Email notification to your registered email address</li>
                <li>In-app notifications</li>
                <li>Prominent notice on our website</li>
            </ul>
            <p>Continued use of the Platform after changes become effective constitutes acceptance of the modified Terms.</p>

            <h2 class="section-title">2. ELIGIBILITY AND ACCOUNT REGISTRATION</h2>
            
            <h3 class="subsection-title">2.1 Age Requirements</h3>
            <p>You must be at least <strong>16 years of age</strong> to use Havitah. By creating an account, you represent and warrant that:</p>
            <ul>
                <li>You are at least 16 years old</li>
                <li>You have the legal capacity to enter into binding contracts</li>
                <li>If you are between 16-18 years old, you have obtained parental or guardian consent where required by law</li>
            </ul>

            <h3 class="subsection-title">2.2 Account Registration</h3>
            <p><strong>Registration Methods:</strong></p>
            <ul>
                <li>Email and password</li>
                <li>Google Sign-In (OAuth)</li>
                <li>Apple Sign-In</li>
            </ul>

            <p><strong>Account Information Requirements:</strong></p>
            <ul>
                <li>Accurate and complete registration information</li>
                <li>Valid email address</li>
                <li>Real name (no impersonation)</li>
                <li>Truthful profile information</li>
            </ul>

            <h3 class="subsection-title">2.3 Account Types</h3>
            <p><strong>Normal User:</strong></p>
            <ul>
                <li>Discover and browse events</li>
                <li>Attend and register for events</li>
                <li>Engage with event content (posts, comments, likes, shares)</li>
                <li>Create "Havitah Reels" and social content</li>
                <li>Message other users</li>
                <li>Follow events and users</li>
            </ul>

            <p><strong>Event Planner:</strong></p>
            <ul>
                <li>All Normal User privileges</li>
                <li>Create and manage events</li>
                <li>Set up recurring events</li>
                <li>Manage event registrations and attendee lists</li>
                <li>Access event analytics and insights</li>
                <li>Generate QR codes for event verification</li>
            </ul>

            <h2 class="section-title">3. USER CONDUCT AND PROHIBITED ACTIVITIES</h2>
            
            <h3 class="subsection-title">3.1 Acceptable Use</h3>
            <p>You agree to use Havitah only for lawful purposes and in accordance with these Terms. You agree <strong>NOT</strong> to:</p>
            
            <p><strong>Illegal Activities:</strong></p>
            <ul>
                <li>Violate any applicable local, national, or international laws</li>
                <li>Engage in fraudulent, deceptive, or misleading activities</li>
                <li>Infringe upon intellectual property rights of others</li>
                <li>Facilitate or promote illegal activities through events or content</li>
            </ul>

            <p><strong>Harmful Content:</strong></p>
            <ul>
                <li>Post content that is defamatory, obscene, pornographic, or sexually explicit</li>
                <li>Share content promoting violence, terrorism, or hate speech</li>
                <li>Harass, bully, threaten, or intimidate other users</li>
                <li>Post content that exploits or harms minors in any way</li>
            </ul>

            <p><strong>Platform Abuse:</strong></p>
            <ul>
                <li>Create fake accounts or impersonate others</li>
                <li>Engage in spam, phishing, or unsolicited commercial communications</li>
                <li>Manipulate engagement metrics (fake likes, shares, followers)</li>
                <li>Use automated bots or scraping tools without authorization</li>
            </ul>

            <h2 class="section-title">4. INTELLECTUAL PROPERTY RIGHTS</h2>
            
            <h3 class="subsection-title">4.1 Havitah's Intellectual Property</h3>
            <p>All content, features, functionality, and intellectual property on the Platform, including but not limited to software, code, algorithms, Havitah logo, trademarks, branding, "Havitah Reels" and "Havitah Waves" features, are owned exclusively by Havitah Technologies Limited.</p>

            <h3 class="subsection-title">4.2 User-Generated Content</h3>
            <p><strong>Ownership:</strong> You retain ownership of all content you create and post on Havitah.</p>
            <p><strong>License Grant to Havitah:</strong> By posting content on the Platform, you grant Havitah a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to use, reproduce, modify, adapt, publish, display, distribute, and promote your content across the Platform.</p>

            <h2 class="section-title">5. "HAVITAH REELS" AND VIDEO CONTENT</h2>
            
            <h3 class="subsection-title">5.1 Reels Guidelines</h3>
            <p>"Havitah Reels" are short-form video content for event highlights and engagement. When creating Reels, you must:</p>
            <ul>
                <li>Own or have rights to all content (video, audio, images)</li>
                <li>Ensure content is appropriate for all audiences</li>
                <li>Tag relevant events accurately</li>
                <li>Comply with music licensing and copyright laws</li>
            </ul>

            <h3 class="subsection-title">5.2 Video Specifications</h3>
            <p><strong>Technical Requirements:</strong></p>
            <ul>
                <li>Maximum duration: 90 seconds</li>
                <li>Minimum resolution: 720p</li>
                <li>Supported formats: MP4, MOV</li>
                <li>Maximum file size: 100MB</li>
            </ul>

            <h2 class="section-title">6. EVENTS AND REGISTRATIONS</h2>
            
            <h3 class="subsection-title">6.1 Event Creation</h3>
            <p>Event Planners are responsible for:</p>
            <ul>
                <li>Providing accurate event information</li>
                <li>Honoring commitments to attendees</li>
                <li>Maintaining event safety and security</li>
                <li>Complying with local laws and obtaining necessary permits</li>
            </ul>

            <h3 class="subsection-title">6.2 Event Registration and Attendance</h3>
            <p><strong>For Attendees:</strong></p>
            <ul>
                <li>Registration confirms intent to attend</li>
                <li>QR codes provided for event check-in</li>
                <li>Registration does not guarantee admission if capacity is reached</li>
            </ul>

            <p><strong>For Event Planners:</strong></p>
            <ul>
                <li>Maintain accurate attendee lists</li>
                <li>Use QR code scanning for check-in verification</li>
                <li>Communicate with attendees through the Platform</li>
                <li>Provide refunds or alternatives if event is cancelled</li>
            </ul>

            <h2 class="section-title">7. DISCLAIMERS AND LIMITATION OF LIABILITY</h2>
            
            <div class="highlight-box">
                <p><strong>THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND.</strong></p>
            </div>

            <h3 class="subsection-title">7.1 No Guarantee of Event Quality</h3>
            <ul>
                <li>Havitah is a platform connecting users with events</li>
                <li>We do not organize, host, or manage events (except our own)</li>
                <li>We do not verify all event details or Event Planner credentials</li>
                <li>Event Planners are independent and not Havitah employees or agents</li>
            </ul>

            <h3 class="subsection-title">7.2 Limitation of Liability</h3>
            <p><strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, HAVITAH SHALL NOT BE LIABLE FOR:</strong></p>
            <ul>
                <li>Indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Events organized by Event Planners</li>
                <li>User-generated content or third-party actions</li>
            </ul>

            <p><strong>Maximum Liability Cap:</strong> Havitah's total liability shall not exceed the amount you paid to us (if any) in the 12 months preceding the claim, or $100 USD, whichever is greater.</p>

            <h2 class="section-title">8. ACCOUNT SUSPENSION AND TERMINATION</h2>
            
            <h3 class="subsection-title">8.1 Termination by You</h3>
            <p>You may terminate your account at any time by using the in-app account deletion feature or contacting support.</p>

            <h3 class="subsection-title">8.2 Termination by Havitah</h3>
            <p>We reserve the right to suspend or terminate your account immediately for:</p>
            <ul>
                <li>Violation of these Terms or community guidelines</li>
                <li>Fraudulent or illegal activities</li>
                <li>Repeated content violations</li>
                <li>Harassment or abusive behavior</li>
            </ul>

            <h2 class="section-title">9. DISPUTE RESOLUTION</h2>
            
            <h3 class="subsection-title">9.1 Governing Law</h3>
            <p>These Terms are governed by the laws of the <strong>Federal Republic of Nigeria</strong>, without regard to conflict of law principles.</p>

            <h3 class="subsection-title">9.2 Informal Resolution</h3>
            <p>Before filing any legal action, you agree to contact us at <strong>info@havitah.com</strong> to work in good faith to resolve the dispute informally for 30 days.</p>

            <h3 class="subsection-title">9.3 Arbitration Agreement</h3>
            <p>If informal resolution fails, disputes will be resolved through binding arbitration rather than court litigation, conducted by a neutral arbitrator in <strong>Lagos, Nigeria</strong>.</p>

            <div class="highlight-box">
                <p><strong>CLASS ACTION WAIVER:</strong> You agree to resolve disputes on an individual basis only. You waive any right to participate in class actions, collective actions, or representative proceedings.</p>
            </div>

            <h2 class="section-title">10. GENERAL PROVISIONS</h2>
            
            <h3 class="subsection-title">10.1 Entire Agreement</h3>
            <p>These Terms, together with our Privacy Policy and any additional terms, constitute the entire agreement between you and Havitah regarding use of the Platform.</p>

            <h3 class="subsection-title">10.2 Contact Information</h3>
            <p><strong>Business Address:</strong> 7 Progress Avenue, Oloko, Sango-Ota, Ogun State, Nigeria</p>

            <div class="contact-info">
                <h3 class="contact-title">Questions About These Terms</h3>
                <p><strong>Email:</strong></p>
                <a href="mailto:info@havitah.com" class="contact-email">info@havitah.com</a>
                <p style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.9rem;">
                    Response Time: 7 business days for standard inquiries
                </p>
            </div>

            <div class="highlight-box" style="margin-top: 3rem; text-align: center;">
                <h3 style="color: var(--primary-light); margin-bottom: 1rem;">ACKNOWLEDGMENT</h3>
                <p style="font-weight: 600;">BY CLICKING "I ACCEPT," CREATING AN ACCOUNT, OR USING THE PLATFORM, YOU ACKNOWLEDGE THAT:</p>
                <ul style="text-align: left; margin-top: 1rem;">
                    <li>✓ You have read and understood these Terms and Conditions</li>
                    <li>✓ You agree to be bound by these Terms</li>
                    <li>✓ You meet the age and eligibility requirements</li>
                    <li>✓ You have reviewed our Privacy Policy</li>
                    <li>✓ You understand your rights and obligations as a user</li>
                </ul>
            </div>

            <p style="text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--card-border); font-style: italic; color: var(--text-secondary);">
                Thank you for being part of the Havitah community! We're excited to connect you with amazing events and experiences.
            </p>
        </div>
    </div>` }} />
    </main>
  );
}
