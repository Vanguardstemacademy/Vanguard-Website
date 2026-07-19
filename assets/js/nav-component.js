class VanguardNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<!-- ============ SKIP LINK ============ -->
<a href="#main" class="btn" style="position:absolute;left:-9999px;top:0;z-index:200;background:var(--navy);color:#fff" onfocus="this.style.left='10px';this.style.top='10px'" onblur="this.style.left='-9999px'">Skip to content</a>

<!-- ============ UTILITY BAR ============ -->
<div class="utilbar">
  <div class="container">
    <a href="/apply">Apply</a>
    <a href="/portal">Portal Login</a>
    <a href="mailto:info@vstemacad.org">Contact</a>
    <a href="/get-involved/sponsor" class="donate">Sponsor a Student</a>
  </div>
</div>

<!-- ============ MAIN NAV ============ -->
<header>
<nav class="nav" id="nav" aria-label="Primary">
  <div class="container">
    <a href="/home" class="brand" aria-label="Vanguard STEM Academy home">
      <img src="assets/images/vanguard-logo-transparent.png" alt="Vanguard STEM Academy crest logo">
    </a>
    <ul class="navlinks desktop-only">
      <li>
        <a href="/home" aria-current="page">Home <svg class="caret" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4"/></svg></a>
        <div class="dropdown" role="menu">
          <a href="/home/path-h" role="menuitem"><svg class="di" viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="12" r="2.4"/><path d="M8.2 6.6c3 .3 4.4 1.9 4.4 5.4M8.2 17.4c3-.3 4.4-1.9 4.4-5.4"/></svg><span class="dtx"><strong>Choose Your Pathway</strong><span>Find the program that matches your goals.</span></span></a>
          <a href="/programs" role="menuitem"><svg class="di" viewBox="0 0 24 24"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5"/></svg><span class="dtx"><strong>Our Core Programs</strong><span>Our primary programs for students and professionals.</span></span></a>
          <a href="/programs/mentorship" role="menuitem"><svg class="di" viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0012 0M12 17v4M9 21h6"/></svg><span class="dtx"><strong>Executive Fireside Chat Series</strong><span>Connect with leaders across industry and government.</span></span></a>
        </div>
      </li>
      <li><a href="/the-leadership-team">The Leadership Team</a></li>
      <li>
        <a href="/programs">Programs <svg class="caret" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4"/></svg></a>
        <div class="dropdown" role="menu">
          <a href="/programs/coaching" role="menuitem"><svg class="di" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.4"/><path d="M5 20c0-3.6 3-6.2 7-6.2s7 2.6 7 6.2"/></svg><span class="dtx"><strong>Individual Coaching Program</strong><span>Personalized coaching for students and professionals.</span></span></a>
          <a href="/the-academy" role="menuitem"><svg class="di" viewBox="0 0 24 24"><path d="M9 3h6v3a3 3 0 01-6 0z"/><path d="M9 6H6.5A2.5 2.5 0 009 10.5M15 6h2.5A2.5 2.5 0 0115 10.5"/><path d="M10 10.5c0 1.5.8 2.6 2 3.2 1.2-.6 2-1.7 2-3.2M12 14v3M8.5 21h7l-1-4h-5z"/></svg><span class="dtx"><strong>Youth STEM Academy</strong><span>Project-based STEM and leadership experiences for students.</span></span></a>
          <a href="/programs/bi" role="menuitem"><svg class="di" viewBox="0 0 24 24"><path d="M4 20V4M4 20h16M8 20v-6M12 20V9M16 20v-9M20 20v-4"/></svg><span class="dtx"><strong>Business Intelligence Academy</strong><span>Practical skills in data analytics and decision-making.</span></span></a>
          <a href="/programs/mentorship" role="menuitem"><svg class="di" viewBox="0 0 24 24"><circle cx="12" cy="7" r="3"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M18 5.5l1.5-1.5M18 8.5l2 .5"/></svg><span class="dtx"><strong>Executive Fireside Chat Program</strong><span>Guidance and leadership from experienced professionals.</span></span></a>
          <a href="/programs/workforce" role="menuitem"><svg class="di" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18"/></svg><span class="dtx"><strong>Corporate &amp; Workforce Training</strong><span>Customized training for leadership and workplace performance.</span></span></a>
          <a href="/programs/ai" role="menuitem"><svg class="di" viewBox="0 0 24 24"><rect x="7" y="8" width="10" height="9" rx="2"/><path d="M12 8V5M9 5h6M9.5 3.8v1.2M14.5 3.8v1.2M7 12H4M20 12h-3M10 12v1.5M14 12v1.5M9.5 20l.5-3M14.5 20l-.5-3"/></svg><span class="dtx"><strong>AI Innovation Academy</strong><span>Applied AI, emerging tech, and innovation skills.</span></span></a>
          <a href="/programs/future" role="menuitem"><svg class="di" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4M8 13h3M8 17h6"/></svg><span class="dtx"><strong>Future Vanguard Academies &amp; Cohorts</strong><span>Preview upcoming pathways and specialized academies.</span></span></a>
        </div>
      </li>
      <li>
        <a href="/the-academy">The Academy <svg class="caret" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4"/></svg></a>
        <div class="dropdown" role="menu">
          <a href="/the-academy/overview" role="menuitem"><svg class="di" viewBox="0 0 24 24"><path d="M3 21h18M4 21V9l8-5 8 5v12M8 21v-6h8v6"/><path d="M4 9h16"/></svg><span class="dtx"><strong>Academy Overview</strong><span>Project-based learning, executive engagement, and career prep.</span></span></a>
          <a href="/the-academy/experiences" role="menuitem"><svg class="di" viewBox="0 0 24 24"><path d="M4 5h16v11H4z"/><path d="M4 16l5-4 3 2 4-4 4 3M9 20h6"/><circle cx="9" cy="9" r="1.3"/></svg><span class="dtx"><strong>Signature Experiences</strong><span>Real student projects and real-world consulting challenges.</span></span></a>
          <a href="/the-academy/cohorts" role="menuitem"><svg class="di" viewBox="0 0 24 24"><circle cx="8" cy="9" r="2.4"/><circle cx="16" cy="9" r="2.4"/><path d="M3 19c0-2.5 2.2-4.3 5-4.3s5 1.8 5 4.3M13 18.5c.3-2.2 2.3-3.8 4.8-3.8 2.6 0 4.2 1.6 4.2 4"/></svg><span class="dtx"><strong>Our Cohorts, Our Future Leaders</strong><span>Cohort experiences, collaboration, and program highlights.</span></span></a>
          <a href="/the-academy/cohorts-stevens" role="menuitem"><svg class="di" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3a14 14 0 000 18M12 3a14 14 0 010 18M3 12h18"/></svg><span class="dtx"><strong>From Vanguard to Stevens</strong><span>Summer experiences at Stevens Institute of Technology.</span></span></a>
          <a href="/our-impact/recognition" role="menuitem"><svg class="di" viewBox="0 0 24 24"><circle cx="12" cy="9" r="5"/><path d="M9 13.5L7.5 21l4.5-2.5L16.5 21 15 13.5"/></svg><span class="dtx"><strong>Achievements &amp; Recognition</strong><span>Municipal recognition, honors, and student accomplishments.</span></span></a>
        </div>
      </li>
      <li><a href="/apply">Apply to the Academy</a></li>
      <li>
        <a href="/our-impact">OUR IMPACT <svg class="caret" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4"/></svg></a>
        <div class="dropdown" role="menu">
          <a href="/our-impact/motion" role="menuitem"><svg class="di" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M10 9l5 3-5 3z"/></svg><span class="dtx"><strong>Our Impact in Motion</strong><span>Watch our featured impact video in action.</span></span></a>
          <a href="/our-impact/recognition" role="menuitem"><svg class="di" viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="M8.5 12L7 21l5-2.5L17 21l-1.5-9"/><path d="M12 6.2l.9 1.8 1.9.3-1.4 1.3.3 1.9-1.7-.9-1.7.9.3-1.9-1.4-1.3 1.9-.3z"/></svg><span class="dtx"><strong>Strategic Recognitions &amp; Invitations</strong><span>Government, university, industry, and leadership engagements.</span></span></a>
          <a href="/our-impact/network" role="menuitem"><svg class="di" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/></svg><span class="dtx"><strong>Global Leadership Network</strong><span>Executives and global partners connected to Vanguard.</span></span></a>
          <a href="/our-impact/metrics" role="menuitem"><svg class="di" viewBox="0 0 24 24"><path d="M8 21V4h9l-1.5 3.5L17 11H8"/><path d="M8 21c-1.5 0-2.5-1-2.5-2.5S6.5 16 8 16M6 13c-1.3 0-2.2-.9-2.2-2.2S4.7 8.6 6 8.6"/></svg><span class="dtx"><strong>Recognitions &amp; Milestones</strong><span>Recognition, honors, and student project milestones.</span></span></a>
          <a href="/our-impact/graduation" role="menuitem"><svg class="di" viewBox="0 0 24 24"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5M22 10v5"/></svg><span class="dtx"><strong>Graduation Highlights</strong><span>Photos and moments from our graduation celebrations.</span></span></a>
          <a href="/our-impact/stories" role="menuitem"><svg class="di" viewBox="0 0 24 24"><path d="M12 20s-6.5-4-6.5-9A3.7 3.7 0 0112 8.5 3.7 3.7 0 0118.5 11c0 5-6.5 9-6.5 9z"/></svg><span class="dtx"><strong>Student Success Stories</strong><span>Students and alumni whose paths were transformed.</span></span></a>
          <a href="/our-impact/testimonials" role="menuitem"><svg class="di" viewBox="0 0 24 24"><path d="M4 5h16v11H9l-4 4v-4H4z"/><path d="M8 9h8M8 12h5"/></svg><span class="dtx"><strong>Video Testimonials</strong><span>Hear from students, parents, partners, and industry leaders.</span></span></a>
        </div>
      </li>
      <li>
        <a href="/get-involved">Get Involved <svg class="caret" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4"/></svg></a>
        <div class="dropdown" role="menu">
          <a href="/get-involved/partner" role="menuitem"><svg class="di" viewBox="0 0 24 24"><path d="M8 13l2.5 2.5a2 2 0 002.8 0l.7-.7 3 3M8 13l-3-3a2 2 0 010-2.8l1.2-1.2a2 2 0 012.8 0L14 9l3-3 4 4-5 5"/></svg><span class="dtx"><strong>Partner With Us</strong><span>Partner with Vanguard as a corporate or academic sponsor.</span></span></a>
          <a href="/get-involved/sponsor" role="menuitem"><svg class="di" viewBox="0 0 24 24"><path d="M12 20s-6.5-4-6.5-9A3.7 3.7 0 0112 8.5 3.7 3.7 0 0118.5 11c0 5-6.5 9-6.5 9z"/></svg><span class="dtx"><strong>Sponsor a Student</strong><span>Fund a scholarship for a young innovator.</span></span></a>
          <a href="/get-involved/volunteer" role="menuitem"><svg class="di" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4a3 3 0 010 8"/></svg><span class="dtx"><strong>Volunteer &amp; Mentor</strong><span>Share your expertise as a mentor or volunteer.</span></span></a>
          <a href="mailto:info@vstemacad.org" role="menuitem"><svg class="di" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><span class="dtx"><strong>Contact Us</strong><span>Reach the Vanguard team with questions or ideas.</span></span></a>
        </div>
      </li>
    </ul>
    <div style="display:flex;align-items:center;gap:.7rem">
      <button class="search-btn" id="searchOpen" aria-label="Open search">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      </button>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
</nav>
</header>

<!-- ============ MOBILE PANEL ============ -->
<div class="overlay-dim" id="dim"></div>
<aside class="mobile-panel" id="mobilePanel" aria-label="Mobile menu">
  <div class="mp-head">
    <div class="mp-brand">
      <span class="mp-crest"><img src="assets/images/footer-badge.png" alt="Vanguard STEM Academy crest"></span>
      <div>
        <div class="t1">Vanguard</div>
        <div class="t2">STEM Academy</div>
      </div>
    </div>
    <button class="mp-close" id="mpClose" aria-label="Close menu"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
  </div>
  <ul class="mp-links">

    <li>
      <div class="msub-row">
        <a href="/home" class="msub-link"><svg class="mp-ic" viewBox="0 0 24 24"><path d="M4 11l8-7 8 7"/><path d="M6 9.5V20h12V9.5"/></svg>Home</a>
        <button class="msub-toggle" aria-expanded="false" aria-label="Toggle Home submenu"><svg class="caret" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>
      </div>
      <div class="sub">
        <div class="sub-card">
          <a class="sub-item" href="/home/path-h">
            <svg class="si-ic" viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="12" r="2.4"/><path d="M8.2 6.6c3 .3 4.4 1.9 4.4 5.4M8.2 17.4c3-.3 4.4-1.9 4.4-5.4"/></svg>
            <span class="si-tx"><strong>Choose Your Pathway</strong><span>Find the program that matches your goals.</span></span>
          </a>
          <a class="sub-item" href="/programs">
            <svg class="si-ic" viewBox="0 0 24 24"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5"/></svg>
            <span class="si-tx"><strong>Our Core Programs</strong><span>Our primary programs for students and professionals.</span></span>
          </a>
          <a class="sub-item" href="/programs/mentorship">
            <svg class="si-ic" viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0012 0M12 17v4M9 21h6"/></svg>
            <span class="si-tx"><strong>Executive Fireside Chat Series</strong><span>Connect with leaders across industry and government.</span></span>
          </a>
        </div>
      </div>
    </li>

    <li><a href="/the-leadership-team"><svg class="mp-ic" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4a3 3 0 010 8M18 14c2.4.8 4 2.6 4 6"/></svg>The Leadership Team</a></li>

    <li>
      <div class="msub-row">
        <a href="/programs" class="msub-link"><svg class="mp-ic" viewBox="0 0 24 24"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5"/></svg>Programs</a>
        <button class="msub-toggle" aria-expanded="false" aria-label="Toggle Programs submenu"><svg class="caret" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>
      </div>
      <div class="sub">
        <div class="sub-card">
          <a class="sub-item" href="/programs/coaching">
            <svg class="si-ic" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.4"/><path d="M5 20c0-3.6 3-6.2 7-6.2s7 2.6 7 6.2"/></svg>
            <span class="si-tx"><strong>Individual Coaching Program</strong><span>Personalized coaching for students and professionals.</span></span>
          </a>
          <a class="sub-item" href="/the-academy">
            <svg class="si-ic" viewBox="0 0 24 24"><path d="M9 3h6v3a3 3 0 01-6 0z"/><path d="M9 6H6.5A2.5 2.5 0 009 10.5M15 6h2.5A2.5 2.5 0 0115 10.5"/><path d="M10 10.5c0 1.5.8 2.6 2 3.2 1.2-.6 2-1.7 2-3.2M12 14v3M8.5 21h7l-1-4h-5z"/></svg>
            <span class="si-tx"><strong>Youth STEM Academy</strong><span>Project-based STEM and leadership experiences for students.</span></span>
          </a>
          <a class="sub-item" href="/programs/bi">
            <svg class="si-ic" viewBox="0 0 24 24"><path d="M4 20V4M4 20h16M8 20v-6M12 20V9M16 20v-9M20 20v-4"/></svg>
            <span class="si-tx"><strong>Business Intelligence Academy</strong><span>Practical skills in data analytics and decision-making.</span></span>
          </a>
          <a class="sub-item" href="/programs/mentorship">
            <svg class="si-ic" viewBox="0 0 24 24"><circle cx="12" cy="7" r="3"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M18 5.5l1.5-1.5M18 8.5l2 .5"/></svg>
            <span class="si-tx"><strong>Executive Fireside Chat Program</strong><span>Guidance and leadership from experienced professionals.</span></span>
          </a>
          <a class="sub-item" href="/programs/workforce">
            <svg class="si-ic" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18"/></svg>
            <span class="si-tx"><strong>Corporate &amp; Workforce Training</strong><span>Customized training for leadership and workplace performance.</span></span>
          </a>
          <a class="sub-item" href="/programs/ai">
            <svg class="si-ic" viewBox="0 0 24 24"><rect x="7" y="8" width="10" height="9" rx="2"/><path d="M12 8V5M9 5h6M9.5 3.8v1.2M14.5 3.8v1.2M7 12H4M20 12h-3M10 12v1.5M14 12v1.5M9.5 20l.5-3M14.5 20l-.5-3"/></svg>
            <span class="si-tx"><strong>AI Innovation Academy</strong><span>Applied AI, emerging tech, and innovation skills.</span></span>
          </a>
          <a class="sub-item" href="/programs/future">
            <svg class="si-ic" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4M8 13h3M8 17h6"/></svg>
            <span class="si-tx"><strong>Future Vanguard Academies &amp; Cohorts</strong><span>Preview upcoming pathways and specialized academies.</span></span>
          </a>
        </div>
      </div>
    </li>

    <li>
      <div class="msub-row">
        <a href="/the-academy" class="msub-link"><svg class="mp-ic" viewBox="0 0 24 24"><path d="M3 21h18M5 21V10h14v11M12 3L3 8h18z"/></svg>The Academy</a>
        <button class="msub-toggle" aria-expanded="false" aria-label="Toggle The Academy submenu"><svg class="caret" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>
      </div>
      <div class="sub">
        <div class="sub-card">
          <a class="sub-item" href="/the-academy/overview">
            <svg class="si-ic" viewBox="0 0 24 24"><path d="M3 21h18M4 21V9l8-5 8 5v12M8 21v-6h8v6"/><path d="M4 9h16"/></svg>
            <span class="si-tx"><strong>Academy Overview</strong><span>Project-based learning, executive engagement, and career prep.</span></span>
          </a>
          <a class="sub-item" href="/the-academy/experiences">
            <svg class="si-ic" viewBox="0 0 24 24"><path d="M4 5h16v11H4z"/><path d="M4 16l5-4 3 2 4-4 4 3M9 20h6"/><circle cx="9" cy="9" r="1.3"/></svg>
            <span class="si-tx"><strong>Signature Experiences</strong><span>Real student projects and real-world consulting challenges.</span></span>
          </a>
          <a class="sub-item" href="/the-academy/cohorts">
            <svg class="si-ic" viewBox="0 0 24 24"><circle cx="8" cy="9" r="2.4"/><circle cx="16" cy="9" r="2.4"/><path d="M3 19c0-2.5 2.2-4.3 5-4.3s5 1.8 5 4.3M13 18.5c.3-2.2 2.3-3.8 4.8-3.8 2.6 0 4.2 1.6 4.2 4"/></svg>
            <span class="si-tx"><strong>Our Cohorts, Our Future Leaders</strong><span>Cohort experiences, collaboration, and program highlights.</span></span>
          </a>
          <a class="sub-item" href="/the-academy/cohorts-stevens">
            <svg class="si-ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3a14 14 0 000 18M12 3a14 14 0 010 18M3 12h18"/></svg>
            <span class="si-tx"><strong>From Vanguard to Stevens</strong><span>Summer experiences at Stevens Institute of Technology.</span></span>
          </a>
          <a class="sub-item" href="/our-impact/recognition">
            <svg class="si-ic" viewBox="0 0 24 24"><circle cx="12" cy="9" r="5"/><path d="M9 13.5L7.5 21l4.5-2.5L16.5 21 15 13.5"/></svg>
            <span class="si-tx"><strong>Achievements &amp; Recognition</strong><span>Municipal recognition, honors, and student accomplishments.</span></span>
          </a>
        </div>
      </div>
    </li>

    <li><a href="/apply"><svg class="mp-ic" viewBox="0 0 24 24"><path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4M10 12h6M10 16h6"/></svg>Apply to the Academy</a></li>

    <li>
      <div class="msub-row">
        <a href="/our-impact" class="msub-link"><svg class="mp-ic" viewBox="0 0 24 24"><path d="M12 3l2.4 5 5.6.7-4 3.9 1 5.4L12 21l-5-3 1-5.4L4 8.7l5.6-.7z"/></svg>Our Impact</a>
        <button class="msub-toggle" aria-expanded="false" aria-label="Toggle Our Impact submenu"><svg class="caret" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>
      </div>
      <div class="sub">
        <div class="sub-card">
          <a class="sub-item" href="/our-impact/motion">
            <svg class="si-ic" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M10 9l5 3-5 3z"/></svg>
            <span class="si-tx"><strong>Our Impact in Motion</strong><span>Watch our featured impact video in action.</span></span>
          </a>
          <a class="sub-item" href="/our-impact/recognition">
            <svg class="si-ic" viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="M8.5 12L7 21l5-2.5L17 21l-1.5-9"/><path d="M12 6.2l.9 1.8 1.9.3-1.4 1.3.3 1.9-1.7-.9-1.7.9.3-1.9-1.4-1.3 1.9-.3z"/></svg>
            <span class="si-tx"><strong>Strategic Recognitions &amp; Invitations</strong><span>Government, university, industry, and leadership engagements.</span></span>
          </a>
          <a class="sub-item" href="/our-impact/network">
            <svg class="si-ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/></svg>
            <span class="si-tx"><strong>Global Leadership Network</strong><span>Executives and global partners connected to Vanguard.</span></span>
          </a>
          <a class="sub-item" href="/our-impact/metrics">
            <svg class="si-ic" viewBox="0 0 24 24"><path d="M8 21V4h9l-1.5 3.5L17 11H8"/><path d="M8 21c-1.5 0-2.5-1-2.5-2.5S6.5 16 8 16M6 13c-1.3 0-2.2-.9-2.2-2.2S4.7 8.6 6 8.6"/></svg>
            <span class="si-tx"><strong>Recognitions &amp; Milestones</strong><span>Recognition, honors, and student project milestones.</span></span>
          </a>
          <a class="sub-item" href="/our-impact/graduation">
            <svg class="si-ic" viewBox="0 0 24 24"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5M22 10v5"/></svg>
            <span class="si-tx"><strong>Graduation Highlights</strong><span>Photos and moments from our graduation celebrations.</span></span>
          </a>
          <a class="sub-item" href="/our-impact/stories">
            <svg class="si-ic" viewBox="0 0 24 24"><path d="M12 20s-6.5-4-6.5-9A3.7 3.7 0 0112 8.5 3.7 3.7 0 0118.5 11c0 5-6.5 9-6.5 9z"/></svg>
            <span class="si-tx"><strong>Student Success Stories</strong><span>Students and alumni whose paths were transformed.</span></span>
          </a>
          <a class="sub-item" href="/our-impact/testimonials">
            <svg class="si-ic" viewBox="0 0 24 24"><path d="M4 5h16v11H9l-4 4v-4H4z"/><path d="M8 9h8M8 12h5"/></svg>
            <span class="si-tx"><strong>Video Testimonials</strong><span>Hear from students, parents, partners, and industry leaders.</span></span>
          </a>
        </div>
      </div>
    </li>

    <li>
      <div class="msub-row">
        <a href="/get-involved" class="msub-link"><svg class="mp-ic" viewBox="0 0 24 24"><path d="M12 18.4s-5.6-3.5-5.6-7.2A3.2 3.2 0 0112 8.9a3.2 3.2 0 015.6 2.3c0 3.7-5.6 7.2-5.6 7.2z"/><path d="M4.5 21c1.4-1.3 3.2-1.9 5.2-1.9h4.6c2 0 3.8.6 5.2 1.9"/></svg>Get Involved</a>
        <button class="msub-toggle" aria-expanded="false" aria-label="Toggle Get Involved submenu"><svg class="caret" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>
      </div>
      <div class="sub">
        <div class="sub-card">
          <a class="sub-item" href="/get-involved/partner">
            <svg class="si-ic" viewBox="0 0 24 24"><path d="M8 13l2.5 2.5a2 2 0 002.8 0l.7-.7 3 3M8 13l-3-3a2 2 0 010-2.8l1.2-1.2a2 2 0 012.8 0L14 9l3-3 4 4-5 5"/></svg>
            <span class="si-tx"><strong>Partner With Us</strong><span>Partner with Vanguard as a corporate or academic sponsor.</span></span>
          </a>
          <a class="sub-item" href="/get-involved/sponsor">
            <svg class="si-ic" viewBox="0 0 24 24"><path d="M12 20s-6.5-4-6.5-9A3.7 3.7 0 0112 8.5 3.7 3.7 0 0118.5 11c0 5-6.5 9-6.5 9z"/></svg>
            <span class="si-tx"><strong>Sponsor a Student</strong><span>Fund a scholarship for a young innovator.</span></span>
          </a>
          <a class="sub-item" href="/get-involved/volunteer">
            <svg class="si-ic" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4a3 3 0 010 8"/></svg>
            <span class="si-tx"><strong>Volunteer &amp; Mentor</strong><span>Share your expertise as a mentor or volunteer.</span></span>
          </a>
          <a class="sub-item" href="mailto:info@vstemacad.org">
            <svg class="si-ic" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
            <span class="si-tx"><strong>Contact Us</strong><span>Reach the Vanguard team with questions or ideas.</span></span>
          </a>
        </div>
      </div>
    </li>

  </ul>
  <div class="mp-util">
    <a href="/portal" class="btn btn-gold">Login / Portal</a>
    <a href="/apply" class="btn btn-gold">Apply to the Academy</a>
  </div>
</aside>

<!-- ============ SEARCH OVERLAY ============ -->
<div class="search-overlay" id="searchOverlay" role="dialog" aria-modal="true" aria-label="Search">
  <button class="sc-close" id="scClose" aria-label="Close search">&times;</button>
  <div class="sc-inner">
    <p class="eyebrow center">Search Vanguard</p>
    <form onsubmit="return false">
      <input type="search" id="searchInput" placeholder="Search programs, impact, people…" aria-label="Search the site">
    </form>
    <div class="sc-suggest">
      <a href="/the-academy">The Academy</a>
      <a href="/programs/coaching">Coaching</a>
      <a href="/our-impact">Our Impact</a>
      <a href="/get-involved">Partner With Us</a>
      <a href="/the-leadership-team">Leadership</a>
    </div>
  </div>
</div>
    `;
    this.initScripts();
  }

  initScripts() {
    /* ============ NAV SCROLL SHADOW ============ */
    const nav = this.querySelector('#nav');
    // applyPill and toTop might be outside this component, so we still query document for them
    const applyPill = document.getElementById('applyPill');
    const toTop = document.getElementById('toTop');
    const hero = document.querySelector('.hero');
    function onScroll() {
      const y = window.scrollY;
      if (nav) nav.classList.toggle('scrolled', y > 20);
      const heroBottom = hero ? hero.offsetHeight : 600;
      const past = y > heroBottom - 100;
      if (applyPill) applyPill.classList.toggle('show', past);
      if (toTop) toTop.classList.toggle('show', y > 700);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ============ MOBILE MENU ============ */
    const hamburger = this.querySelector('#hamburger');
    const mobilePanel = this.querySelector('#mobilePanel');
    const dim = this.querySelector('#dim');
    const mpClose = this.querySelector('#mpClose');

    function openMenu() {
      if (mobilePanel) mobilePanel.classList.add('open');
      if (dim) dim.classList.add('show');
      if (hamburger) {
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
      }
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      if (mobilePanel) mobilePanel.classList.remove('open');
      if (dim) dim.classList.remove('show');
      if (hamburger) {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', () => mobilePanel.classList.contains('open') ? closeMenu() : openMenu());
    if (mpClose) mpClose.addEventListener('click', closeMenu);
    if (dim) dim.addEventListener('click', closeMenu);

    function closeSub(btn) {
      const sub = btn.closest('.msub-row').nextElementSibling;
      btn.setAttribute('aria-expanded', 'false');
      sub.style.maxHeight = null;
    }
    function openSub(btn) {
      const sub = btn.closest('.msub-row').nextElementSibling;
      btn.setAttribute('aria-expanded', 'true');
      sub.style.maxHeight = sub.scrollHeight + 'px';
    }
    this.querySelectorAll('.msub-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        this.querySelectorAll('.msub-toggle').forEach(b => closeSub(b));
        if (!isOpen) openSub(btn);
      });
    });
    this.querySelectorAll('.mobile-panel a').forEach(a => a.addEventListener('click', closeMenu));

    /* ============ SEARCH OVERLAY ============ */
    const searchOverlay = this.querySelector('#searchOverlay');
    const searchInput = this.querySelector('#searchInput');
    const searchOpen = this.querySelector('#searchOpen');
    const scClose = this.querySelector('#scClose');

    function closeSearch() {
      if (searchOverlay) searchOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (searchOpen) searchOpen.addEventListener('click', () => {
      searchOverlay.classList.add('open');
      setTimeout(() => { if (searchInput) searchInput.focus(); }, 200);
      document.body.style.overflow = 'hidden';
    });
    if (scClose) scClose.addEventListener('click', closeSearch);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeSearch();
        closeMenu();
      }
    });

    // Auto-update active page state in desktop + mobile nav (clean-URL aware).
    // Match on the first path segment so /programs, /programs/mentorship, etc. all
    // highlight the same top-level item.
    const baseOf = p => '/' + ((p || '').split('/').filter(Boolean)[0] || '');
    const currentBase = baseOf(window.location.pathname);
    this.querySelectorAll('.navlinks > li > a, .mp-links > li > a, .mp-links .msub-link').forEach(link => {
      const linkBase = baseOf(link.getAttribute('href') || '');
      if (currentBase !== '/' && linkBase === currentBase) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    /* ============ CLEAN SECTION ROUTES (no #hash) ============
       Section links look like /programs/mentorship or /the-academy/overview.
       The last path segment matches an element id on the page. We scroll to it
       on load, and intercept same-page clicks for a smooth, reload-free jump. */
    const NAV_OFFSET = 90; // approx height of the fixed nav
    const sectionIdFromPath = pathname => {
      const segs = pathname.split('/').filter(Boolean);
      return segs.length >= 2 ? segs[segs.length - 1] : null;
    };
    const scrollToId = (id, smooth) => {
      const el = id && document.getElementById(id);
      if (!el) return false;
      const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
      window.scrollTo({ top: y < 0 ? 0 : y, behavior: smooth ? 'smooth' : 'auto' });
      return true;
    };

    // On initial load, honour a section in the URL.
    window.addEventListener('load', () => {
      const id = sectionIdFromPath(window.location.pathname);
      if (id) setTimeout(() => scrollToId(id, false), 60);
    });

    // Intercept clicks to sections on the current page: smooth-scroll, no reload.
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href^="/"]');
      if (!a) return;
      let url;
      try { url = new URL(a.href, window.location.origin); } catch (_) { return; }
      if (url.origin !== window.location.origin) return;
      const targetId = sectionIdFromPath(url.pathname);
      if (!targetId) return;
      const curTop = window.location.pathname.split('/').filter(Boolean)[0] || '';
      const tgtTop = url.pathname.split('/').filter(Boolean)[0] || '';
      if (curTop === tgtTop) {
        // Same page: handle in-place, never reload.
        e.preventDefault();
        if (scrollToId(targetId, true)) history.pushState(null, '', url.pathname);
      }
    });
  }
}
customElements.define('vanguard-nav', VanguardNav);
