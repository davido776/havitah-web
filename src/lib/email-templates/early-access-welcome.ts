export const earlyAccessWelcomeHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to the Wave - Havitah</title>
    <style>
        body {
            font-family: 'Segoe UI', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #210347 0%, #0E031C 100%);
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #A055FF 0%, #F2994A 50%, #B070FF 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
            position: relative;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.1);
        }
        .header-content {
            position: relative;
            z-index: 1;
        }
        .logo {
            font-size: 2.8rem;
            font-weight: 900;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            letter-spacing: -1px;
        }
        .tagline {
            font-size: 1.1rem;
            opacity: 0.95;
            font-weight: 300;
        }
        .content {
            padding: 40px 30px;
        }
        .title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: #2d3748;
            text-align: center;
        }
        .wave-emoji {
            font-size: 2rem;
            margin: 0 10px;
        }
        .text {
            font-size: 1.1rem;
            line-height: 1.8;
            margin-bottom: 25px;
            color: #4a5568;
        }
        .highlight {
            background: linear-gradient(135deg, #A055FF, #F2994A);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 600;
        }
        .features {
            background: #f7fafc;
            border-radius: 15px;
            padding: 25px;
            margin: 25px 0;
        }
        .features h3 {
            color: #2d3748;
            margin-bottom: 15px;
            font-size: 1.3rem;
        }
        .feature-list {
            list-style: none;
            padding: 0;
        }
        .feature-list li {
            padding: 8px 0;
            color: #4a5568;
            position: relative;
            padding-left: 25px;
        }
        .feature-list li::before {
            content: '🌟';
            position: absolute;
            left: 0;
        }
        .cta-section {
            text-align: center;
            margin: 30px 0;
            padding: 25px;
            background: linear-gradient(135deg, rgba(160, 85, 255, 0.1), rgba(242, 153, 74, 0.1));
            border-radius: 15px;
            border: 1px solid rgba(160, 85, 255, 0.2);
        }
        .cta-text {
            font-size: 1.2rem;
            color: #2d3748;
            margin-bottom: 20px;
            font-weight: 600;
        }
        .footer {
            background: #1C1C1E;
            color: #F2F2F7;
            padding: 30px;
            text-align: center;
        }
        .footer-text {
            font-size: 0.95rem;
            margin-bottom: 15px;
            opacity: 0.9;
        }
        .social-hint {
            font-size: 0.85rem;
            color: #AEAEB2;
            font-style: italic;
            margin-top: 20px;
        }
        .cosmic-border {
            height: 3px;
            background: linear-gradient(90deg, #A055FF, #F2994A, #B070FF);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="cosmic-border"></div>

        <div class="header">
            <div class="header-content">
                <div class="logo">HAVITAH</div>
                <div class="tagline">Where experiences become connections</div>
            </div>
        </div>

        <div class="content">
            <h1 class="title">Welcome to the Wave! <span class="wave-emoji">🌊</span></h1>

            <p class="text">
                You've just joined something <span class="highlight">extraordinary</span>.
                We're building the future of how people discover, attend, and share life's most meaningful gatherings -
                a place where every experience becomes a connection, and every moment becomes a lasting memory.
            </p>

            <div class="features">
                <h3>What's Coming Your Way:</h3>
                <ul class="feature-list">
                    <li><strong>Exclusive early access</strong> to the next generation of gathering experiences</li>
                    <li><strong>Behind-the-scenes insights</strong> into how we're revolutionizing discovery</li>
                    <li><strong>Founder perks</strong> and special access to premium features</li>
                    <li><strong>First glimpse</strong> of tools that will transform how you experience occasions</li>
                </ul>
            </div>

            <p class="text">
                We're not just building another platform. We're crafting an entirely new way
                for people to <span class="highlight">discover</span> meaningful gatherings,
                <span class="highlight">connect</span> with like-minded attendees, and
                <span class="highlight">experience</span> every occasion to its fullest.
            </p>

            <div class="cta-section">
                <p class="cta-text">
                    🚀 Something big is launching Q4 2025
                </p>
                <p style="color: #4a5568; margin: 0;">
                    You'll be the first to experience the future of gatherings.
                </p>
            </div>

            <p class="text">
                Keep this email safe - it's your exclusive pass to the future of meaningful gatherings.
            </p>
        </div>

        <div class="footer">
            <p class="footer-text">
                <strong>The Havitah Team</strong><br>
                Building tomorrow's connections, today
            </p>
            <div class="cosmic-border" style="margin: 15px auto; width: 100px; height: 2px;"></div>
            <p class="social-hint">
                P.S. We're creating something that will transform how you discover and attend the moments that matter most.
                The future of gatherings is coming... 🔥✨
            </p>
        </div>
    </div>
</body>
</html>`;

export const earlyAccessWelcomeText = `Welcome to the Wave!\n\nYou've joined something extraordinary. We're building the future of how people discover and share meaningful gatherings.\n\nWhat's coming your way:\n- Exclusive early access\n- Behind-the-scenes insights\n- Founder perks\n- First glimpse of transformative tools\n\nSomething big is launching Q4 2025. You'll be the first to experience the future of gatherings.\n\nThe Havitah Team`;
