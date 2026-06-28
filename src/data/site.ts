import type { ActivitySection } from "@/components/ui/activity-directory";

export const siteConfig = {
  name: "Dilara Caglar",
  title: "Project Portfolio 2026",
  tagline:
    "ECE student at Carnegie Mellon — ASIC & accelerator design, memory architecture, embedded sensing, and hardware–software co-design. Available Summer 2026.",
  email: "dcaglar@andrew.cmu.edu",
  phone: "925-875-8767",
  location: "Bay Area, CA · Carnegie Mellon University",
  availability: "Available Summer 2027",
  links: {
    linkedin: "https://linkedin.com/in/dilaracaglar",
    github: "https://github.com/dcaglar-28",
    scholar: "https://scholar.google.com/",
    cv: "/dilara-caglar-resume.pdf",
    resumeCadence: "/dilara-caglar-resume-cadence.pdf",
  },
};

export const education = {
  school: "Carnegie Mellon University",
  graduation: "Anticipated graduation — May 2028",
  degrees: [
    "B.S. Electrical and Computer Engineering (ECE)", 
    "Additional major: Engineering Design, Innovation & Entrepreneurship (EDIE)",
  ],
  coursework: [
    "Computer Systems",
    "Digital Systems Design",
    "Analog Circuits",
    "Signals & Systems",
    "Data Structures",
    "Linear Algebra",
    "Differential Equations",
    "Robotics",
    "Computer Architecture",
    "PCB Design",
  ],
};

export const experience = [
  {
    id: "nexus",
    title: "ASIC & AI Accelerator Design Undergraduate Researcher",
    organization: "Nexus Research Group · Carnegie Mellon University",
    advisor: "Tathagata Srimani",
    period: "January 2026 – Present",
    highlights: [
      "Built pre/post-silicon validation workflows using JTAG and BIST to verify integrated ASIC systems.",
      "Debugged hardware test failures across signal integrity and power delivery; identified timing and stability issues.",
      "Conducted system-level validation of 3D-stacked architectures, analyzing performance bottlenecks and interconnect behavior.",
      "Designed high-speed PCBs with controlled impedance and signal integrity constraints; validated with lab instrumentation.",
      "Characterized system behavior under real-world conditions and documented performance/reliability tradeoffs.",
    ],
  },
  {
    id: "safari",
    title: "Hardware Architecture Research Intern",
    organization: "SAFARI Research Group · ETH Zürich",
    advisor: "Prof. Onur Mutlu",
    period: "May 2025 – December 2025",
    note: "Onsite Summer 2025 · Remote thereafter",
    highlights: [
      "Designed DRAM-based architectures for real-time signal processing (FFT/INTT pipelines) under memory and bandwidth constraints.",
      "Mapped compute pipelines onto memory subarrays for parallel, low-latency processing of structured workloads.",
      "Extended Python frameworks (Ramulator 2.0, CipherMatch) for system-level performance evaluation.",
      "Analyzed latency, throughput, and bandwidth tradeoffs for real-time sensing and instrumentation-style workloads.",
      "Mitigated memory access bottlenecks through optimized data placement and scheduling strategies.",
    ],
  },
  {
    id: "ta-ece",
    title: "Teaching Assistant — Intro to Electrical & Computer Engineering",
    organization: "Carnegie Mellon University",
    period: "August 2025 – December 2025",
    highlights: [
      "Guided 200+ students in hardware testing, debugging methodologies, and validation techniques in analog circuit labs.",
    ],
  },
] as const;

export const leadership = [
  {
    id: "student-council",
    organization: "CMU College of Engineering Student Council",
    role: "Secretary",
    period: "Aug 2025 – Present",
  },
  {
    id: "delta-gamma-booth",
    organization: "Delta Gamma",
    role: "Head of Booth Electrical Chair",
    period: "Present",
  },
  {
    id: "fyab",
    organization: "CMU College of Engineering — First Year Advisory Board",
    role: "Head of Marketing",
    period: "Aug 2024 – May 2025",
  },
] as const;

export const skillGroups = [
  {
    label: "Digital Design & ASIC",
    items: [
      "Verilog / SystemVerilog",
      "VHDL",
      "RTL Design",
      "Logic Synthesis",
      "Place-and-Route",
      "Static Timing Analysis (STA)",
      "DFT",
      "RTL-to-GDSII Flow",
      "Digital Design Fundamentals",
      "Python / TCL Scripting",
      "ASIC / SoC Design",
      "DRAM / PIM Architecture",
      "FPGA Development",
    ],
  },
  {
    label: "Embedded Systems",
    items: [
      "C / C++",
      "Embedded C",
      "Microcontroller Programming (Arduino / STM32)",
      "Debugging (GDB)",
      "Real-Time Systems",
      "Lab Instrumentation",
    ],
  },
  {
    label: "PCB & Mixed-Signal",
    items: [
      "PCB Design (Altium)",
      "Signal Integrity (SI/PI)",
      "Controlled Impedance",
      "PDN Design",
      "Stack-Up Optimization",
      "Mixed-Signal / CMOS Circuit Design",
      "LTspice",
    ],
  },
  {
    label: "Software & Tools",
    items: [
      "Python",
      "C / C++",
      "Linux",
      "Git",
      "PyTorch",
      "JAX",
      "Java",
      "Ramulator 2.0",
      "Autodesk Fusion",
      "NVIDIA Isaac Sim",
      "Valgrind",
      "3D Printing",
    ],
  },
] as const;

export const bio = {
  headline: "Electrical & Computer Engineer",
  paragraphs: [
    "I am a B.S. Electrical and Computer Engineering student at Carnegie Mellon University (May 2028), with an additional major in Engineering Design, Innovation & Entrepreneurship (EDIE).",
    "My experience spans ASIC and AI accelerator design at the Nexus Research Group, memory-architecture research at ETH Zürich with the SAFARI group, and hands-on embedded work—from IMU wearables and computer-vision control to custom PCBs and large-format IoT displays.",
    "I am available for Summer 2026 internships in hardware architecture, ASIC/SoC design, embedded systems, and hardware–software co-design.",
  ],
  highlights: [
    { label: "Degree", value: "B.S. ECE + EDIE, CMU" },
    { label: "Availability", value: "Summer 2026" },
    { label: "Location", value: "Bay Area, CA" },
  ],
};

/** Home page profile photo in `public/profile.png` */
export const bioProfile = {
  photo: "/profile.png",
  photoAlt: "Portrait of Dilara Caglar at ASPLOS '24",
  funBio: [
    "I am an undergraduate Electrical and Computer Engineering student at Carnegie Mellon University, pursuing a second major in Engineering Design, Innovation, and Entrepreneurship, with a focus on computer architecture, embedded systems, and energy efficient computing. My focus spans processing-in-memory, neuromorphic computing, and hardware–algorithm co-design, and I'm passionate about advancing work at the intersection of computer architecture and machine learning.",
    "This past year, I interned with ETH Zürich's SAFARI Research Group under Prof. Onur Mutlu, where I helped design processing-in-memory architectures to accelerate in-DRAM homomorphic encryption, reducing latency and energy for large-scale cryptographic workloads. I am currently working at Carnegie Mellon's NeuroAI Computer Architecture Lab (NCAL), where we are extending the NeuTNN spiking-neural-network architecture toward multimodal recognition, training systems on energy-efficient edge hardware.",
    "Beyond the lab, I love to build. My personal projects and coursework span sensing, computer vision, IoT, and custom PCBs, giving me hands-on experience across the full stack, from circuit design and firmware to simulation and software, and strengthening my fundamentals.",
  ],
} as const;

export const educationActivitySection: ActivitySection = {
  id: "education",
  title: "Education",
  entries: [
    {
      id: "cmu",
      title: education.school,
      period: education.graduation,
      description: [
        ...education.degrees,
        `Relevant coursework: ${education.coursework.join(", ")}.`,
      ],
    },
  ],
};

export type ResearchInstitution = {
  id: string;
  name: string;
  organization: string;
  collaborators: string;
  sortOrder: number;
};

export const researchInstitutions: ResearchInstitution[] = [
  {
    id: "safari",
    name: "SAFARI Research Group",
    organization: "ETH Zürich",
    collaborators: "Prof. Onur Mutlu · Ismail Emir Yuksel · Mayank Kabra",
    sortOrder: 0,
  },
  {
    id: "ncal",
    name: "NeuroAI Computer Architecture Lab (NCAL)",
    organization: "Carnegie Mellon University",
    collaborators: "Prof. John Shen · Shanmuga Venkatachalam · Liam Carden",
    sortOrder: 1,
  },
  {
    id: "nexus",
    name: "Nexus Research Group",
    organization: "Carnegie Mellon University",
    collaborators: "Tathagata Srimani",
    sortOrder: 2,
  },
  {
    id: "cmu-cps",
    name: "CMU ECE — Cyber-Physical Systems",
    organization: "Carnegie Mellon University",
    collaborators: "Embedded Systems: CPS Design (course research)",
    sortOrder: 3,
  },
];

/** Institution ids omitted from the home Research collaborations list */
const homeResearchCollaborationExcludeIds = new Set(["cmu-cps"]);

export function buildHomeResearchCollaborationsSection(): ActivitySection {
  return {
    id: "research-collaborations",
    title: "Research collaborations",
    entries: [...researchInstitutions]
      .filter((inst) => !homeResearchCollaborationExcludeIds.has(inst.id))
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map((inst) => ({
        id: inst.id,
        title: inst.name,
        organization: inst.organization,
        roleLine: inst.collaborators,
      })),
  };
}

export const homeResearchCollaborationsSection = buildHomeResearchCollaborationsSection();

export type ProjectMedia = {
  src: string;
  alt?: string;
  type?: "image" | "video";
  /** Optional poster frame for video */
  poster?: string;
};

export type PhysicalProject = {
  id: string;
  /** Main title as on Portfolio 2026 slide deck */
  deckTitle: string;
  summary: string;
  /** Deck bullets — not paired with media[] */
  highlights: string[];
  year: string;
  tags: string[];
  status: "completed";
  /** Flat photo gallery; order is display sequence only */
  media: ProjectMedia[];
  links?: { label: string; href: string }[];
};

/** Physical / hands-on projects — matches Project Portfolio 2026 slide deck */
export const physicalProjects: PhysicalProject[] = [
  {
    id: "repx",
    deckTitle: "REPX (2026)",
    summary:
      "Wearable sensing system that tracks exercise form, counts reps, and renders motion in real-time 3D.",
    highlights: [
      "Embedded sensing: IMU-based pipeline to track motion and classify exercise form in real time.",
      "Sensor pipelines: Accelerometer and gyroscope processing for rep detection and movement-quality evaluation.",
      "3D visualization: Mapped real-time sensor data to a Unity model for user-facing feedback.",
      "Signal processing: Data acquisition and filtering to improve reliability under dynamic conditions.",
      "Extended stack: Multi-node wearables, React dashboard, and skeletal digital twin (REPX).",
    ],
    year: "2026",
    tags: ["IMU", "Unity", "Biomechanics", "Embedded", "Signal Processing"],
    status: "completed",
    media: [
      {
        type: "image",
        src: "/projects/repx/01-title-slide.png",
        alt: "REPX — Real-Time Movement Intelligence title slide",
      },
      {
        type: "image",
        src: "/projects/repx/pushup-demo.gif",
        poster: "/projects/repx/pushup-demo-poster.jpg",
        alt: "REPX wearable IMU tracking push-ups with multi-node sensors at TartanHacks demo",
      },
      {
        type: "image",
        src: "/projects/repx/03-desk-demo.png",
        alt: "REPX desk demo with sensor, dumbbell, and Unity visualization",
      },
      {
        type: "image",
        src: "/projects/repx/dashboard-demo.gif",
        poster: "/projects/repx/dashboard-demo-poster.jpg",
        alt: "REPX Movement Intelligence live bicep curl dashboard with 3D avatar and rep tracking",
      },
      {
        type: "image",
        src: "/projects/repx/05-concept-slide.png",
        alt: "REPX concept slide — sensor wearable ×3 with AI interface for form, technique, reps, and biodata",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/FelixLin6/REPX.git" }],
  },
  {
    id: "build18-fan",
    deckTitle: "Autonomous Tracking Fan (2025)",
    summary:
      "Computer-vision-driven fan that detects and follows you around a workspace.",
    highlights: [
      "Embedded CV: PyTorch-based object detection to identify and localize the user in frame.",
      "Closed-loop control: PID controller on Arduino translating visual coordinates into smooth stepper actuation.",
      "Rapid prototyping: 3D-printed dual-axis gimbal and gear assembly for the fan chassis.",
      "Performance: low-latency tracking keeping airflow centered on the target during lateral movement.",
    ],
    year: "2025",
    tags: ["Computer Vision", "PyTorch", "Arduino", "PID", "3D Printing"],
    status: "completed",
    media: [
      {
        type: "image",
        src: "/projects/build18-fan/01-tracking-fan.gif",
        poster: "/projects/build18-fan/01-tracking-fan-poster.jpg",
        alt: "Build18 autonomous tracking fan in operation",
      },
      {
        type: "image",
        src: "/projects/build18-fan/02-tracking-fan.gif",
        poster: "/projects/build18-fan/02-tracking-fan-poster.jpg",
        alt: "Build18 fan following user with computer vision",
      },
    ],
  },
  {
    id: "metro-booth",
    deckTitle: "IoT Transit LED Display (2026)",
    summary:
      "High-density LED board streaming live transit-style alerts and countdown timers.",
    highlights: [
      "Adafruit Matrix Portal S3 drives dual 64×32 RGB LED panels over HUB75, wired into the first panel's input.",
      "System scalability: IDC ribbon daisy-chains the first panel's output to the second's input, merging two 64×32 panels into one 128×32 addressable display.",
      "Firmware: CircuitPython with Adafruit's Protomatter library drives the chained panels as a single display; required over Arduino, which lacks chainable HUB75 support.",
      "Power management: Split-rail design: a 5V 10A switching supply feeds both panels through a SparkFun screw-terminal adapter, while the Matrix Portal S3 runs independently over USB-C, isolating logic and display power domains.",
      "Software logic: Custom scrolling text, fonts, and color-coded destination alerts with per-location timers, built on Adafruit's Animated Message Board framework.",
    ],
    year: "2026",
    tags: ["CircuitPython", "IoT", "LED Matrix", "Power Systems", "Firmware"],
    status: "completed",
    media: [
      {
        type: "image",
        src: "/projects/metro-booth/transit-display.gif",
        poster: "/projects/metro-booth/transit-display-poster.jpg",
        alt: "LED transit matrix — Abbey Road Studios and Record store destination timers",
      },
      {
        type: "image",
        src: "/projects/metro-booth/transit-display-2.gif",
        poster: "/projects/metro-booth/transit-display-2-poster.jpg",
        alt: "LED transit matrix — Morgan Blvd and Twinbrook arrival board",
      },
      {
        type: "image",
        src: "/projects/metro-booth/kinetic-iris-install.gif",
        poster: "/projects/metro-booth/kinetic-iris-install-poster.jpg",
        alt: "Kinetic Iris install — LED transit board on decorated staircase with Tower Bridge and Record store",
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/dcaglar-28/Metro-Booth-2026.git" },
    ],
  },
  {
    id: "logic-shield",
    deckTitle: "Arduino Logic Gate Shield (2025)",
    summary:
      "Custom-designed PCB shield for hands-on logic-gate experiments (CMU 18-021).",
    highlights: [
      "Logic integration: on-board AND, OR, NAND, and NOR gates implemented using 74-series logic ICs, covering core combinational logic building blocks.",
      "Component assembly: precision SMD soldering for ICs, transistors, and resistor networks.",
      "Power & signal routing: level-shifting and regulation traces between Arduino Uno R3's 5V logic and 3.3V on-board ICs, maintaining clean signal integrity across the voltage domain boundary.",
      "Hardware validation: end-to-end validation of truth tables and gate-level logic correctness via multimeter continuity testing across all input combinations for AND, OR, NAND, and NOR expressions.",
    ],
    year: "2025",
    tags: ["PCB Design", "SMD Assembly", "Digital Logic", "Arduino", "Validation"],
    status: "completed",
    media: [
      {
        type: "image",
        src: "/projects/logic-shield/01-pcb-layout.png",
        alt: "Logic gates Arduino shield PCB layout — CMU ECE 18-021",
      },
      {
        type: "image",
        src: "/projects/logic-shield/02-assembled-shield.png",
        alt: "Assembled logic gates shield with AND, OR, NAND, and NOR hardware",
      },
      {
        type: "image",
        src: "/projects/logic-shield/03-assembled-shield.png",
        alt: "CMU ECE 18-021 Spring 2025 Arduino shield on bench",
      },
      {
        type: "image",
        src: "/projects/logic-shield/04-pcb-layout-fusion.png",
        alt: "Fusion 360 PCB layout — SN74HC157 multiplexer, transistors, and header routing",
      },
      {
        type: "image",
        src: "/projects/logic-shield/05-bare-shield-bench.png",
        alt: "Bare logic shield PCB next to Arduino Uno R3 at the soldering station",
      },
    ],
  },
  {
    id: "flashtrader",
    deckTitle: "FlashTrader (2026)",
    summary:
      "A sub-15 KB browser trading game on real market data — playable offline or head-to-head.",
    highlights: [
      "Compressed dataset: Normalized, Huffman-encoded AAPL/NVDA/AMZN prices (Jan–Dec 2025) in under 15 KB for offline execution.",
      "Multiplayer sync: Low-latency host/join synchronization when networked.",
      "Gameplay loop: 20-second rounds on historical charts with buy/exit trading and final P&L scoring.",
    ],
    year: "2026",
    tags: ["JavaScript", "Huffman Compression", "Multiplayer", "Web", "FinTech"],
    status: "completed",
    media: [
      {
        type: "image",
        src: "/projects/flashtrader/01-home.png",
        alt: "FlashTrader home screen — play solo or host/join multiplayer",
      },
      {
        type: "image",
        src: "/projects/flashtrader/02-multiplayer-lobby.jpg",
        alt: "FlashTrader multiplayer lobby — share join code with friends",
      },
      {
        type: "image",
        src: "/projects/flashtrader/trading-demo.gif",
        poster: "/projects/flashtrader/trading-demo-poster.jpg",
        alt: "FlashTrader demo — home screen through gameplay",
      },
    ],
    links: [{ label: "Live demo", href: "https://flashtrades.netlify.app" }],
  },
];

export type ResearchPhaseStatus = "completed" | "in_progress" | "planned";

export type ResearchPhase = {
  id: string;
  name: string;
  status: ResearchPhaseStatus;
  summary: string;
  deliverables?: string[];
};

export type ResearchItem = {
  id: string;
  institutionId: string;
  title: string;
  summary: string;
  researchQuestion?: string;
  method: string[];
  phases: ResearchPhase[];
  period: string;
  tags: string[];
  status: "completed" | "ongoing";
  pageAffiliation: string;
  affiliationNote?: string;
  subtitleLine?: string;
  pageCollaborators: string;
  contributionsNote?: string;
  plannedWork?: { heading: string; items: string[] };
  /** Papers / reports — inline Resources row on the research page */
  papers?: { label: string; href: string }[];
  /** @deprecated Use `papers` */
  links?: { label: string; href: string }[];
};

export const researchPageIntro =
"Work organized by lab and institution. Each entry outlines my contributions, methods, and future directions"
export const researchItems: ResearchItem[] = [
  {
    id: "safari-memory",
    institutionId: "safari",
    title: "DRAM Processing-in-Memory for Fully Homomorphic Encryption",
    pageAffiliation: "SAFARI Research Group · ETH Zürich",
    pageCollaborators: "Prof. Onur Mutlu · with Ismail Emir Yuksel, Mayank Kabra",
    period: "May 2025 – December 2025",
    tags: ["FHE", "DRAM", "PIM", "FIGARO", "Simulation"],
    summary:
      "Designed DRAM-based processing-in-memory architectures that run fully homomorphic encryption directly in memory, cutting latency and energy for large-scale polynomial multiplication (4096-element polynomials across 131,072 ciphertexts).",
    method: [
      "Designed and benchmarked three DRAM data-placement strategies (FIGARO, LISA+FIGARO, LISA+RowCopy), reaching **318× speedup** over pure in-memory FIGARO and **6.06× lower latency** than processor-centric baselines.",
      "Cut memory energy **41.5×** with RowClone-optimized polynomial-shift strategies that minimize costly inter-bank data movement across a 16-bank hierarchy.",
      "Enabled concurrent processing of **131,072 ciphertexts** by combining column-granularity (FIGARO) and hierarchical row-layout (LISA) in-memory paradigms with minimal row-buffer contention.",
      "Extended Ramulator 2.0 and CipherMatch simulators with subarray-level access tracking and RowCopy latency models to validate architectural feasibility.",
    ],
    phases: [],
    status: "completed",
    papers: [
      { label: "Ramulator 2.0", href: "https://github.com/CMU-SAFARI/ramulator2" },
    ],
  },
  {
    id: "newtnn-ncal",
    institutionId: "ncal",
    title: "Multimodal Neuromorphic Digit Recognition (NeuTNN)",
    pageAffiliation: "NeuroAI Computer Architecture Lab (NCAL) · Carnegie Mellon University",
    pageCollaborators: "Prof. John Shen · with Shanmuga Venkatachalam, Liam Carden",
    period: "Ongoing",
    tags: ["Neuromorphic", "Multimodal", "R-STDP", "Edge AI"],
    summary:
      "Extended the NeuTNN architecture to classify visual and auditory digits jointly using only biologically-plausible R-STDP learning (no backpropagation), building an edge-ready system that holds stable multimodal representations under strict biological and hardware constraints.",
    method: [
      "Lifted audio-only accuracy from **21% → 90.26%** with a log-mel spike-encoding pipeline (per-bin median thresholding) — no changes to the architecture or learning rule.",
      "Achieved **100% multimodal accuracy** on a 72-segment model via a block-diagonal segment mask enforcing strict modality separation, stable across 2:1 and 1:1 visual-to-audio ratios.",
      "Sustained **100% accuracy at 9.7% synaptic density** (~460K of 4.75M synapses) through systematic pruning analysis, quantifying the efficiency relevant to NCAL's edge hardware targets.",
      "Proposed a dynamic confidence-weighting mechanism — using winning body-potential magnitude as an inference-time reliability signal — to fix robustness under single-modality degradation, with no retraining or architecture change.",
    ],
    phases: [],
    status: "ongoing",
    papers: [
      { label: "NeuTNNs", href: "https://arxiv.org/pdf/2602.01546" },
      { label: "NeRTCAM", href: "https://arxiv.org/pdf/2405.11844" },
    ],
  },
  {
    id: "nexus-asic",
    institutionId: "nexus",
    title: "3D CNFET Accelerator — Pin Allocation & PCB Bring-Up",
    pageAffiliation: "Nexus Research Group · Carnegie Mellon University",
    pageCollaborators: "Tathagata Srimani",
    period: "January 2026 – Present",
    tags: ["3D Integration", "CNFET", "Pin Mapping", "PCB", "SerDes", "DFT"],
    summary:
      "Supported bring-up of a monolithic-3D CNFET accelerator within the lab's 3D Integration program, focused on pin allocation and PCB placement-and-routing for the chip's high-speed external test interface.",
    method: [
      "Refined pin allocation across **220+ functional pins** over six VHDCI connectors and chip-on-board routing, preserving signal grouping for dual instruction/data buses with **zero routing conflicts** on the mapped plan.",
      "Applied SerDes and differential-pair PCB constraints for GHz+ signaling — 100Ω ±10% impedance, <50ps inter-pair skew, 3× spacing for crosstalk isolation.",
      "Supported DFT pin planning across scan domains and 15+ redundancy configuration pins to preserve yield and diagnostic coverage across VHDCI channels.",
      "Applied split-voltage power-distribution and ground-stitching constraints (250µm perimeter via spacing, <5% droop targets) for signal integrity under high-speed switching.",
    ],
    phases: [],
    status: "ongoing",
    papers: [
      {
        label: "Nexus · 3D Integration",
        href: "https://www.cmu.edu/ece/nexus/research/3d-integration.html",
      },
    ],
  },
  {
    id: "av-sensor-placement",
    institutionId: "cmu-cps",
    title: "Hardware-Aware Sensor Placement for Autonomous Vehicles",
    pageAffiliation: "CMU ECE — Cyber-Physical Systems",
    affiliationNote: "(course research)",
    subtitleLine: "Embedded Systems: CPS Design",
    pageCollaborators: "",
    period: "Spring 2026",
    tags: ["Sensor Fusion", "Co-Design", "Optimization", "MuJoCo", "Ingest Bandwidth"],
    summary:
      "Optimizes which sensor — lidar, radar, camera, or disabled — fills each of five fixed AV chassis slots under a target SoC's ingest-bandwidth budget, balancing detection rate, time-to-detect, and cost.",
    method: [
      'Reframed the problem as hardware/software co-design where the "software" is the sensor suite and the binding constraint is **ingest bandwidth** (not memory bandwidth, which never bound in v1) — making the hardware-aware claim substantive.',
      "Built a **CMA-ES** optimizer over a continuous relaxation of the 5-slot assignment, with candidates evaluated in parallel MuJoCo ray-cast simulations honoring per-sensor FOV, range, and latency.",
      "Defined the objective `L = w_acc·detection + w_lat·latency + w_cost·cost` with a hard ingest-bandwidth cap and two weight presets (`safety_first`, `efficiency`).",
      "Delivered the Phase 1 evaluation infrastructure: spawn-safe parallel workers, Common Random Numbers for fair within-generation comparison, provenance logging (git SHA, MuJoCo version, host), and declarative RUN_CONFIGS for scenario/platform swaps.",
    ],
    contributionsNote: "(Phase 1 of 4 complete)",
    plannedWork: {
      heading: "Planned Work & Future Directions",
      items: [
        "**Phase 2 — Reliability:** 30-seed bootstrap confidence intervals; four scenarios (straight, urban-cluttered, highway-speed, adversarial-blind); sensor-noise models for rain (lidar), glare (camera), and multipath ghosts (radar).",
        '**Phase 3 — Ablations & SoC sweep:** m_lidar, bandwidth-cap, and w_cost sweeps; a five-platform SoC sweep yielding a "bandwidth needed for a 4-sensor AV stack" figure.',
        "**Phase 4 — Manuscript:** replace point estimates with CI-bracketed results and add a hardware-co-design section grounded in the SoC sweep.",
      ],
    },
    phases: [],
    status: "ongoing",
  },
];

export const bioActivitySections: ActivitySection[] = [
  educationActivitySection,
  {
    id: "research-roles",
    title: "Research",
    entries: (["nexus", "safari"] as const).map((id) => {
      const role = experience.find((r) => r.id === id)!;
      const roleLine =
        role.id === "safari" && "note" in role
          ? `${role.advisor ? `Advisor: ${role.advisor} · ` : ""}${role.note}`
          : "advisor" in role && role.advisor
            ? `Advisor: ${role.advisor}`
            : undefined;

      return {
        id: role.id,
        title: role.title,
        organization: role.organization,
        period: role.period,
        roleLine,
        description: [...role.highlights].slice(0, 3),
      };
    }),
  },
  {
    id: "teaching",
    title: "Teaching",
    entries: [
      {
        id: "ta-ece",
        title: "Intro to Electrical & Computer Engineering",
        organization: "Carnegie Mellon University",
        period: "August 2025 – December 2025",
        roleLine: "Teaching Assistant",
        description: experience.find((r) => r.id === "ta-ece")?.highlights[0],
      },
    ],
  },
  {
    id: "leadership",
    title: "Leadership & Service",
    entries: leadership.map((item) => ({
      id: item.id,
      title: item.organization,
      period: item.period,
      roleLine: item.role,
    })),
  },
];

const homeBioSections = bioActivitySections.filter(
  (section) => section.id !== "research-roles" && section.id !== "education",
);

export const homeActivitySections: ActivitySection[] = [
  educationActivitySection,
  homeResearchCollaborationsSection,
  ...homeBioSections,
];

export function getProjectsActivitySections(): ActivitySection[] {
  return [
    {
      id: "physical-projects",
      title: "Projects",
      entries: physicalProjects.map((p) => ({
        id: p.id,
        title: p.deckTitle,
        period: p.year,
        roleLine: p.tags.slice(0, 4).join(" · "),
        description: p.summary,
        links: [
          { label: "Details", href: `#${p.id}` },
          ...(p.links ?? []),
        ],
      })),
    },
  ];
}

export const contactPage = {
  intro: `${siteConfig.availability}. Reach out for research collaborations, internships, role inquiries, or if you just want to chat.`,
  globeEyebrow: "Current Location",
  whatsNextTitle: "What's next",
  whatsNextDescription: [
    "In July I'll be joining the European Innovation Academy in Porto, Portugal, working with students from 60+ countries to develop a startup alongside mentors from companies including Google, TikTok, and Microsoft.",
    "This experience also contributes toward my EDIE additional major, deepening the entrepreneurship and innovation side of my engineering curriculum and connecting the research I do in the lab to the product and venture side of shipping technology to a live market.",
  ],
  readingTitle: "What I'm Reading",
};

export type ReadingItem = {
  id: string;
  title: string;
  href: string;
};

export const readingList: ReadingItem[] = [
  {
    id: "drisa",
    title: "DRISA: A DRAM-Based Reconfigurable In-Situ Accelerator",
    href: "https://www.researchgate.net/publication/321173385_DRISA_a_DRAM-based_Reconfigurable_In-Situ_Accelerator",
  },
  {
    id: "neurocube",
    title:
      "Neurocube: A Programmable Digital Neuromorphic Architecture with High-Density 3D Memory",
    href: "https://dl.acm.org/doi/abs/10.1145/3007787.3001178",
  },
  {
    id: "neutnn",
    title:
      "NeuroAI Temporal Neural Networks (NeuTNNs): Microarchitecture and Design Framework for Specialized Neuromorphic Processing Units",
    href: "https://arxiv.org/html/2602.01546",
  },
  {
    id: "neuromorphic-mcts",
    title: "Neuromorphic Monte Carlo Tree Search Methods for Shortest Path Interdiction",
    href: "https://dl.acm.org/doi/pdf/10.1109/ICONS62911.2024.00063",
  },
];

/** Palo Alto, CA — single marker on the contact globe */
export const findMe = {
  id: "palo-alto",
  location: [37.4443, -122.1598] as [number, number],
  name: "San Jose, CA",
  markerLabel: "San Jose, CA",
  focusItems: [
    {
      title: "NeuroAI Computer Architecture Lab (NCAL) · CMU",
      description:
        "NeuTNN extension with block-diagonal modality separation and R-STDP-only learning—log-mel audio (21%→90.26%), 100% multimodal accuracy on a 72-segment model, and pruning to 9.7% of synapses (~460k / 4.75M) without accuracy loss.",
    },
  ],
};

export const navItems = [
  { label: "Home", href: "/home" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
] as const;
