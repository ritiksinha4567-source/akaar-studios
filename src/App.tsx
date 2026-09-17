

import "./App.css";

function App() {
return (
<div className="site">

{/* NAVBAR */}
<nav className="navbar">
<div className="logo">ĀKAAR</div>

<div className="nav-links">
<a href="#work">Work</a>
<a href="#services">Services</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>
</div>

<a className="nav-cta" href="#contact">
Start a project ↗
</a>
</nav>


{/* HERO */}
<main>
<section className="hero">
<div className="hero-top">
<span>CREATIVE STUDIO · INDIA</span>
<span>EST. 2026</span>
</div>

<div className="hero-title">
<h1>
GIVING
<br />
<span>IDEAS FORM.</span>
</h1>
</div>

<div className="hero-bottom">
<p>
We turn ideas into stories, identities and digital
experiences people remember.
</p>

<a href="#work" className="circle-arrow">
↓
</a>
</div>
</section>


{/* INTRO */}
<section className="intro">
<div className="section-label">01 / THE STUDIO</div>

<div className="intro-content">
<h2>
Your business.
<br />
<em>Our storytelling.</em>
</h2>

<div className="intro-text">
<p>
ĀKAAR is a creative studio built for brands that
want to look different, communicate better and
leave a lasting impression.
</p>

<p>
From social content and AI-powered commercials
to websites and brand storytelling — we give
ideas a form people can see.
</p>
</div>
</div>
</section>


{/* SERVICES */}
<section className="services" id="services">
<div className="section-label">02 / WHAT WE DO</div>

<div className="services-list">

<div className="service">
<span>01</span>
<h3>AI COMMERCIALS</h3>
<p>Visual campaigns built with imagination.</p>
<span className="service-arrow">↗</span>
</div>

<div className="service">
<span>02</span>
<h3>SOCIAL MEDIA</h3>
<p>Content that gives your brand a voice.</p>
<span className="service-arrow">↗</span>
</div>

<div className="service">
<span>03</span>
<h3>WEBSITES</h3>
<p>Digital experiences designed to convert.</p>
<span className="service-arrow">↗</span>
</div>

<div className="service">
<span>04</span>
<h3>BRAND STORYTELLING</h3>
<p>Ideas shaped into stories worth remembering.</p>
<span className="service-arrow">↗</span>
</div>

<div className="service">
<span>05</span>
<h3>CREATIVE CONTENT</h3>
<p>Concepts, campaigns and visual identities.</p>
<span className="service-arrow">↗</span>
</div>

</div>
</section>


{/* WORK */}
<section className="work" id="work">
<div className="section-label">03 / SELECTED WORK</div>

<div className="work-header">
<h2>Ideas,<br /><em>made visible.</em></h2>
<p>Selected concepts & creative experiments by ĀKAAR.</p>
</div>

<div className="work-grid">

<div className="work-card work-one">
<div className="work-number">01</div>
<div className="work-info">
<span>SPEC CAMPAIGN</span>
<h3>NOIR</h3>
</div>
</div>

<div className="work-card work-two">
<div className="work-number">02</div>
<div className="work-info">
<span>BRAND FILM</span>
<h3>FORM / 01</h3>
</div>
</div>

<div className="work-card work-three">
<div className="work-number">03</div>
<div className="work-info">
<span>DIGITAL EXPERIENCE</span>
<h3>OBJECT</h3>
</div>
</div>

<div className="work-card work-four">
<div className="work-number">04</div>
<div className="work-info">
<span>VISUAL CAMPAIGN</span>
<h3>AFTERLIGHT</h3>
</div>
</div>

</div>
</section>


{/* PROCESS */}
<section className="process">
<div className="section-label">04 / OUR PROCESS</div>

<div className="process-heading">
<h2>
From thought
<br />
<em>to form.</em>
</h2>
</div>

<div className="process-grid">

<div>
<span>01</span>
<h3>IDEA</h3>
<p>
We understand the idea, the audience and
what the brand wants to become.
</p>
</div>

<div>
<span>02</span>
<h3>FORM</h3>
<p>
We turn strategy into visuals, stories,
content and digital experiences.
</p>
</div>

<div>
<span>03</span>
<h3>IMPACT</h3>
<p>
We create work designed to be noticed,
remembered and acted upon.
</p>
</div>

</div>
</section>


{/* ABOUT */}
<section className="about" id="about">
<div className="section-label">05 / ABOUT ĀKAAR</div>

<div className="about-content">
<h2>
We believe
<br />
<em>every idea deserves a form.</em>
</h2>

<p>
ĀKAAR is an independent creative studio working
at the intersection of technology, storytelling
and design.
</p>
</div>
</section>


{/* CTA */}
<section className="contact" id="contact">
<div className="section-label">06 / LET'S CREATE</div>

<div className="contact-title">
<h2>
HAVE AN
<br />
<em>IDEA?</em>
</h2>
</div>

<a
href="mailto:the.akaarstudios@gmail.com"
className="big-contact"
>
LET'S TALK ↗
</a>

<div className="contact-details">
<a href="mailto:the.akaarstudios@gmail.com">
the.akaarstudios@gmail.com
</a>

<a href="tel:+916201485770">
+91 62014 85770
</a>
</div>
</section>

</main>


{/* FOOTER */}
<footer>
<div className="footer-logo">ĀKAAR</div>

<div>
<p>GIVING IDEAS FORM.</p>
<p>© 2026 ĀKAAR STUDIOS</p>
</div>

<div className="footer-social">
Instagram ↗
<br />
Email ↗
</div>
</footer>

</div>
);
}

export default App;
