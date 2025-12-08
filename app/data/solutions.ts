// src/data/solutions.ts
import {
  ChartBarIcon,
  CursorArrowRippleIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { PiTruckTrailerFill, PiCrane } from "react-icons/pi";
import { RiPoliceCarFill } from "react-icons/ri";
import { LuPillBottle } from "react-icons/lu";
import { MdOutlineGarage, MdOutlineWarehouse } from "react-icons/md";
import { JSX } from "react";
import Fleet from "../../public/assets/solutions_fleet.jpg"
import WareHouse from "../../public/assets/warehouse.jpg"
import Toll from "../../public/assets/toll.jpg"
import Security from "../../public/assets/security.jpg"
import Pharmaceuticals from "../../public/assets/pharmacy.jpg"
import Construction from "../../public/assets/construction.jpg"


export type Solution = {
  name: string;
  description: string;
  headline: string;
  challenge?: {
    title: string;
    points: string[];
  };
  solution?: {
    title: string;
    points: string[];
  };
  coreFeatures?: {
    title: string;
    subtext: string;
  }[];
  useCases?: string[];
  chooseUs?: string[];
  slug: string;
  href: string; // helpful for links e.g. `/solutions/${slug}`
  icon: any;
  bgImage: any; // path to the background image
};

export const solutions: Solution[] = [
  {
    name: "Fleet Management & Logistics",
    headline: "Real-Time Fleet Visibility and Secure Cargo Intelligence Powered by RFID + AI",
    description: "Track vehicles, authenticate cargo, automate checkpoints, and optimize logistics operations with high-accuracy, always-on identification across your entire supply chain.",
    challenge: {
      title: "Fleet and logistics operators face operational blind spots that increase risk and costs:",
      points: [
        "Unreliable vehicle identification at depots, hubs, or checkpoints",
        "Theft, cargo tampering, and unauthorized vehicle access",
        "Manual logs and paperwork slowing down operations",
        "No real-time location or movement history",
        "Inability to verify what vehicle moved what cargo, and when",
        "Lack of integration between fleets, warehouses, and distribution hubs",
      ]
    },
    solution: {
      title: "RFID + AI for Secure, Visible, Intelligent Logistics",
      points: [
        "Our platform provides end-to-end visibility across every vehicle, cargo unit, and movement event—enabling automated verification, faster operations, and data-driven decisions.",
      ]
    },
    coreFeatures: [
      {
        title: "Vehicle Identification at Speed",
        subtext: "RFID windshield tags automatically detect vehicles entering or leaving depots, warehouses, and logistics hubs.",
      },
      {
        title: "Cargo & Pallet Authentication",
        subtext: "Assign RFID tags to containers, pallets, cartons, or cargo units for chain-of-custody tracking.",
      },
      {
        title: "Automated Checkpoints",
        subtext: "Trigger approvals or alerts when specific vehicles or cargo pass checkpoints.",
      },
      {
        title: "Driver & Vehicle Access Control",
        subtext: "Restrict access based on time, role, vehicle type, or cargo classification.",
      },
      {
        title: "Route & Movement Visibility",
        subtext: "Track movement history, timestamps, and event logs across multiple locations.",
      },
      {
        title: "Theft Prevention & Anomaly Alerts",
        subtext: "Receive instant alerts for unauthorized movements or mismatched vehicleU+002dcargo associations.",
      },
      {
        title: "API & ERP integration",
        subtext: "Sync seamlessly with fleet management, warehouse systems, or ERP tools.",
      },
    ],
    useCases: [
      "Distribution center automation",
      "Secure depot entry/exit",
      "Port & container tracking",
      "Long-haul freight visibility",
      "Courier vehicle authentication",
      "Fuel tanker monitoring",
      "Inter-city movement records",
      "Cold-chain compliance",
    ],
    chooseUs: [
      "Proven accuracy in fast-moving, high-volume environments",
      "Secure, encrypted hardware",
      "Low-latency real-time data",
      "Scalable across multiple hubs and cities",
      "AI-powered anomaly detection",
      "Built for African logistics environments",

    ],
    slug: "fleet-management-logistics",
    href: "/solutions/fleet-management-logistics",
    icon:PiTruckTrailerFill,
    bgImage: Fleet,
  },

  {
    name: "Construction & Heavy Equipment",
    headline: "Track Heavy Equipment, Secure Job Sites, and Prevent Asset Loss with RFID + AI",
    description: "Gain full visibility into machinery, tools, and operator access, reducing theft, downtime, and safety risks across construction and industrial sites.",
    challenge: {
      title: "Construction sites face frequent operational losses due to:",
      points: [
        "Equipment theft and unauthorized usage",
        "Missing tools and untracked machinery",
        "Contractors accessing restricted zones",
        "Inability to verify who last operated an asset",
        "Manual checks for compliance and safety",
        "Little visibility across large, complex sites",
      ]
    },
    solution: {
      title: "RFID + AI for Full-Site Asset Intelligence",
      points: [
        "We provide a unified platform to track heavy equipment, vehicles, tools, and worker access in real time, boosting safety, efficiency, and accountability.",
      ]
    },
    coreFeatures: [
      {
        title: "Heavy Equipment Tracking",
        subtext: "RFID tags withstand heat, dust, and vibration, ideal for cranes, excavators, bulldozers, forklifts, and generators.",
      },
      {
        title: "Operator Authentication",
        subtext: "Verify that only authorized personnel can operate specific machines.",
      },
      {
        title: "Tool Tracking & Inventory Visibility",
        subtext: "Track small assets like drills, harnesses, power tools, and safety equipment.",
      },
      {
        title: "Restricted Zone Compliance",
        subtext: "Monitor and control access to high-risk areas.",
      },
      {
        title: "Automatic Movement Logs",
        subtext: "See which equipment moved where—without manual check-ins.",
      },
      {
        title: "Prevent Theft & Unauthorized Removal",
        subtext: "Instant alerts when tools or machinery leave designated zones.",
      },
      {
        title: "Maintenance & Utilisation Insights",
        subtext: "Track usage hours, idle time, and service history.",
      },
    ],
    useCases: [
      "Multisite equipment visibility",
      "Theft prevention",
      "Equipment rental tracking",
      "Tool crib management",
      "Operator time logging",
      "Access-controlled areas",
      "Preemptive maintenance alerts",
    ],
    chooseUs: [
      "Durable industrial-grade tags",
      "Automated compliance reporting",
      "Reduced operational losses",
      "Real-time visibility for complex sites",
      "Optimised asset allocation",
      "Supports large-scale infrastructure projects",

    ],
    slug: "construction-heavy-equipment",
    href: "/solutions/construction-heavy-equipment",
    icon: PiCrane,
    bgImage: Construction,
  },
  {
    name: "Military & Security",
    headline: "Secure Identification and Controlled Access for High-Security Environments",
    description: "Deploy encrypted RFID + AI for base access, sensitive asset tracking, vehicle verification, and mission-critical situational awareness.",
    challenge: {
      title: "Security agencies face risks such as:",
      points: [
        "Unauthorized vehicles entering secure locations",
        "Untracked weapons, equipment, and vehicles",
        "Manual checkpoints vulnerable to human error",
        "Poor asset accountability and movement logs",
        "Inability to confirm identity during emergencies",
        "Lack of surveillance across perimeters and entry points",
      ]
    },
    solution: {
      title: "Defense-Grade RFID + AI for Total Operational Control",
      points: [
        "Our platform combines encrypted RFID identification with AI verification to secure facilities, track sensitive assets, and support military-grade operations.",
      ]
    },
    coreFeatures: [
      {
        title: "Encrypted Vehicle & Personnel Identification",
        subtext: "Secure windshield tags, ID cards, and equipment tags.",
      },
      {
        title: "Automated Access Control",
        subtext: "Authorize or deny entry based on role, clearance, time, or vehicle type.",
      },
      {
        title: "Armory & Sensitive Asset Tracking",
        subtext: "Track weapons, gear, radios, kits, tactical equipment, and vehicles.",
      },
      {
        title: "Perimeter Intelligence",
        subtext: "Monitor and log every entry/exit event automatically.",
      },
      {
        title: "Rapid Response & Emergency Logs",
        subtext: "Instantly retrieve who is inside zones during emergencies.",
      },
      {
        title: "AI Verification Layer",
        subtext: "Match RFID events with plate numbers for added authenticity.",
      },
      {
        title: "Full Audit Trails",
        subtext: "Maintain transparent logs for accountability and investigations.",
      },
    ],
    useCases: [
      "Military base access control",
      "Armory and equipment tracking",
      "Convoy and vehicle identification",
      "Secure perimeter monitoring",
      "Restricted building access",
      "Emergency evacuation intelligence",
    ],
    chooseUs: [
      "Defense-grade encryption",
      "Highly reliable under extreme conditions",
      "No line-of-sight restrictions",
      "Tamper-resistant RFID tags",
      "Works in low-light, high-dust, and high-traffic environments",

    ],
    slug: "military-security",
    href: "/solutions/military-security",
    icon: RiPoliceCarFill,
    bgImage: Security,
  },
  {
    name: "Healthcare & Pharmaceuticals",
    headline: "Protect Pharmaceuticals, Medical Equipment, and Supply Chains with RFID + AI",
    description: "Ensure integrity, prevent counterfeits, track medical assets, and maintain real-time visibility across hospitals, labs, distributors, and cold-chain logistics.",
    challenge: {
      title: "Healthcare and pharma supply chains face:",
      points: [
        "Counterfeit drug infiltration",
        "Lost or misplaced medical equipment",
        "Inaccurate inventory records",
        "No visibility across supply chain logistics",
        "Cold chain failures",
        "Unverified deliveries and handovers",
      ]
    },
    solution: {
      title: "RFID + AI for Safe, Transparent, and Compliant Healthcare Operations",
      points: [
        "We secure every stage of pharmaceutical and medical asset movement; ensuring authenticity, compliance, and accountability.",
      ]
    },
    coreFeatures: [
      {
        title: "Anti-Counterfeit Drug Authentication",
        subtext: "Each drug batch or vial can be tagged with serialized RFID for verification.",
      },
      {
        title: "Medical Equipment Tracking",
        subtext: "Track ventilators, infusion pumps, monitors, and mobile equipment.",
      },
      {
        title: "Cold Chain Monitoring",
        subtext: "Monitor temperature breaches and maintain integrity.",
      },
      {
        title: "Automated Inventory Management",
        subtext: "Real-time stock levels at pharmacies, clinics, and hospitals.",
      },
      {
        title: "Supply Chain Visibility",
        subtext: "Track movements from distributors to hospitals to departments.",
      },
      {
        title: "Ambulance Fleet Identification",
        subtext: "Automated entry/exit logging across facilities.",
      },
      {
        title: "Compliance Reporting",
        subtext: "Generate auditable reports for regulators.",
      },
    ],
    useCases: [
      "Hospital asset tracking",
      "Drug authenticity verification",
      "Temperature-sensitive vaccine distribution",
      "Pharmacy stock management",
      "Medical logistics and distribution",
      "Ambulance fleet monitoring",
    ],
    chooseUs: [
      "Prevents counterfeit infiltration",
      "Automated audit logs",
      "Improved hospital efficiency",
      "Reduced equipment loss",
      "Compliance-ready",
      "Real-time visibility from warehouse to bedside",

    ],
    slug: "healthcare-pharmaceuticals",
    href: "/solutions/healthcare-pharmaceuticals",
    icon: LuPillBottle,
    bgImage: Pharmaceuticals,
  },
  {
    name: "Smart Cities & Tolling",
    headline: "Transform Urban Mobility with Automated Tolling, Traffic Intelligence & Smart Enforcement",
    description: "RFID + AI enables cities to eliminate revenue leakages, reduce congestion, and enforce compliance with unmatched accuracy.",
    challenge: {
      title: "Cities struggle with:",
      points: [
        "Revenue leakage from manual tolling",
        "Manual tolling and stop-and-go queues",
        "Fraudlent payments and evasion",
        "Unreliable plate-based identification",
        "Congestion and poor traffic visibility",
        "Weak compliance enforcement",
      ]
    },
    solution: {
      title: "RFID + AI Infrarstructure for Smart Urban Cities & Mobility",
      points: [
        "We power tolling, traffic management, parking, permitting, and enforcement—using highly reliable RFID paired with AI verification.",
      ]
    },
    coreFeatures: [
      {
        title: "Drive-Through Automated Tolling",
        subtext: "Automatic RFID-based toll collection with zero stops.",
      },
      {
        title: "AI Enhanced Vehicle Verification",
        subtext: "RFID + ANPR ensures unmatched accuracy.",
      },
      {
        title: "Parking & Permit Enforcement",
        subtext: "Detect unauthorized parking or expired permits automatically.",
      },
      {
        title: "Traffic Visibility & Analytics",
        subtext: "Heatmaps, congestion data, and movement patterns.",
      },
      {
        title: "Violation Detection & Alerts",
        subtext: "Identify unpaid tolls, unauthorized access, and compliance issues.",
      },
      {
        title: "City-wide Visibility Dashboard",
        subtext: "One interface for all movement across the city.",
      },
      {
        title: "Revenue Assurance",
        subtext: "Transparent, auditable transactions with no leakage.",
      },
    ],
    useCases: [
      "Toll gates",
      "Access-controlled zones",
      "Urban traffic intelligence",
      "Automated enforcement",
      "Smart parking systems",
      "Permit and residency parking",
    ],
    chooseUs: [
      "99%+ identification accuracy",
      "Built for crowded, fast-moving cities",
      "Rapid deployment and scaling",
      "Automated operations reducing OPEX",
      "Scalable for mega-cities",

    ],
    slug: "smart-cities-tolling",
    href: "/solutions/smart-cities-tolling",
    icon: MdOutlineGarage,
    bgImage: Toll,
  },
  {
    name: "Retail, Warehousing & Supply Chain",
    headline: "End-to-End Supply Chain Visibility and Automated Warehouse Intelligence",
    description: "RFID + AI delivers accurate inventory, real-time asset tracking, and automated movements across retail stores, warehouses, and distribution networks.",
    challenge: {
      title: "Retailers and warehouse operators face:",
      points: [
        "Stock inaccuracies",
        "Lost inventory",
        "Manual cycle counts",
        "Delayed order fulfilment",
        "Unverified pallet movements",
        "Lack of real-time visibility",
      ]
    },
    solution: {
      title: "RFID + AI for a Fully Visible, High-Speed Supply Chain",
      points: [
        "Automate inventory, track pallets, authenticate shipments, and optimize warehouse operations.",
      ]
    },
    coreFeatures: [
      {
        title: "Real-Time Inventory Tracking",
        subtext: "RFID automatically updates every stock movement—no human involvement needed.",
      },
      {
        title: "Pallet & Container Tracking",
        subtext: "Track goods from inbound receiving to outbound dispatch.",
      },
      {
        title: "Automated Warehouse Gates",
        subtext: "Scan vehicles and shipments as they enter/exit facilities.",
      },
      {
        title: "Asset Location Tracking",
        subtext: "Find items, containers, or equipment instantly.",
      },
      {
        title: "Mismatch & Error Detection",
        subtext: "AI alerts you when shipments or items don't match manifest records.",
      },
      {
        title: "Order Fulfilment Insights",
        subtext: "Measure pick accuracy, order cycle time, and throughput.",
      },
      {
        title: "Supply Chain Analytics",
        subtext: "Visibility across sourcing, distribution, retail stores, and customer delivery.",
      },
    ],
    useCases: [
      "Retail store inventory",
      "Large warehouse automation",
      "Logistics hub operations",
      "E-commerce fulfillment",
      "Pallet & carton tracking",
      "Cross-docking intelligence",
    ],
    chooseUs: [
      "Eliminate stock errors",
      "Reduce shrinkage",
      "Boost operational speed",
      "Improve customer satisfaction",
      "Integrate with WMS/ERP",
      "Scales with your distribution footprint",

    ],
    slug: "retail-warehousing-supply-chain",
    href: "/solutions/retail-warehousing-supply-chain",
    icon: MdOutlineWarehouse,
    bgImage: WareHouse,
  },
];

export default solutions;
