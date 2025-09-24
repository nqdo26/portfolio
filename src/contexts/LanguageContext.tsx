"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "vi" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  vi: {
    // Navigation
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.projects": "Dự án",
    "nav.contact": "Liên hệ",

    // Hero Section
    "hero.name": "Nguyễn Quang Độ",
    "hero.roles.0": "Frontend Developer",
    "hero.roles.1": "Full-Stack Developer",
    "hero.roles.2": "ReactJS Specialist",
    "hero.description":
      "Tôi là một lập trình viên luôn hướng đến việc xây dựng các ứng dụng web hiện đại, dễ mở rộng và mang lại trải nghiệm người dùng tinh gọn, trực quan.",
    "hero.viewProjects": "Xem dự án",
    "hero.contact": "Liên hệ",

    // About Section
    "about.title": "Giới thiệu",
    "about.aboutMe": "Về tôi",
    "about.description1":
      "Tôi là sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học Cần Thơ. Qua các dự án học tập và luận văn tốt nghiệp, tôi đã tích lũy kinh nghiệm phát triển web với ReactJS, JavaScript và TypeScript, từ giao diện người dùng đến xử lý logic ứng dụng.",
    "about.description2":
      "Tôi luôn không ngừng học hỏi công nghệ mới và mong muốn áp dụng chúng để xây dựng những ứng dụng hiện đại, tối ưu và mang lại trải nghiệm tốt cho người dùng.",
    "about.experience": "Kinh nghiệm & Dự án",

    // Experience Projects
    "experience.project1.title": "Full-Stack Developer - Luận văn tốt nghiệp",
    "experience.project1.year": "2025",
    "experience.project1.description":
      "Xây dựng website review địa điểm du lịch, hỗ trợ lập lịch trình, tích hợp AI chatbot gợi ý địa điểm",
    "experience.project1.tech":
      "ReactJs, NodeJS, RAG Server, LLM, OpenAI API, Vector Database, Cloudinary",

    "experience.project2.title": "Full-Stack Developer - Dự án nhóm",
    "experience.project2.year": "2025",
    "experience.project2.description":
      "Xây dựng website chia sẻ tài liệu học tập, hỗ trợ đăng tải, tìm kiếm và đánh giá tài liệu",
    "experience.project2.tech": "React.js, NodeJs, MongoDB, Supabase",

    "experience.project3.title": "Full-Stack Developer - Dự án cá nhân",
    "experience.project3.year": "2024",
    "experience.project3.description":
      "Xây dựng website bán giày hỗ trợ giỏ hàng, thanh toán và quản lý đơn hàng",
    "experience.project3.tech": "React.js, NodeJs, MongoDB, Cloudinary",
    "experience.techUsed": "Công nghệ sử dụng:",

    // Skills Section
    "skills.title": "Kỹ năng",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Tools",

    // Projects Section
    "projects.title": "Dự án",
    "projects.ecommerce.title": "GoOhNo - Luận văn tốt nghiệp",
    "projects.ecommerce.description":
      "Hệ thống web hỗ trợ review địa điểm du lịch, lập lịch trình và tích hợp AI chatbot hỗ trợ ngợi ý địa điểm theo yêu cầu người dùng",
    "projects.taskApp.title": "Documan - Dự án nhóm",
    "projects.taskApp.description":
      "Hệ thống web chia sẻ tài liệu học tập, hỗ trợ đăng tải, tìm kiếm và đánh giá tài liệu",
    "projects.weatherApp.title": "Nike - Dự án cá nhân",
    "projects.weatherApp.description":
      "Website bán giày hỗ trợ phân loại, tìm kiếm, giỏ hàng, thanh toán và quản lý đơn hàng",
    "projects.liveDemo": "Deployed",
    "projects.github": "GitHub",

    // Contact Section
    "contact.title": "Liên hệ",
    "contact.description":
      "Tôi luôn sẵn sàng thảo luận về các dự án mới và cơ hội nghề nghiệp",
    "contact.email": "Email",
    "contact.phone": "Điện thoại",
    "contact.address": "Địa chỉ",
    "contact.location": "TP. Cần Thơ, Việt Nam",

    // Footer
    "footer.copyright": "Tất cả quyền được bảo lưu.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.name": "Nguyễn Quang Độ",
    "hero.roles.0": "Frontend Developer",
    "hero.roles.1": "Full-Stack Developer",
    "hero.roles.2": "ReactJS Specialist",
    "hero.description":
      "I am a developer passionate about building modern, scalable web applications that deliver a clean and intuitive user experience.",
    "hero.viewProjects": "View Projects",
    "hero.contact": "Contact",

    // About Section
    "about.title": "About",
    "about.aboutMe": "About Me",
    "about.description1":
      "I am a final-year Software Engineering student at Can Tho University. Through academic projects and my graduation thesis, I have gained experience in web development with ReactJS, JavaScript, and TypeScript, covering both user interfaces and application logic.",
    "about.description2":
      "I am always eager to learn new technologies and apply them to build modern, optimized applications that enhance user experience.",
    "about.experience": "Experience & Projects",

    // Experience Projects
    "experience.project1.title": "Full-Stack Developer - Graduation Thesis",
    "experience.project1.year": "2025",
    "experience.project1.description":
      "Developed a travel destination review website with itinerary planning and an AI-powered chatbot for location recommendations.",
    "experience.project1.tech":
      "ReactJS, NodeJS, RAG Server, LLM, OpenAI API, Vector Database, Cloudinary",

    "experience.project2.title": "Full-Stack Developer - Team Project",
    "experience.project2.year": "2025",
    "experience.project2.description":
      "Built a web platform for sharing study materials with features for uploading, searching, and reviewing documents.",
    "experience.project2.tech": "React.js, NodeJs, MongoDB, Supabase",

    "experience.project3.title": "Full-Stack Developer - Personal Project",
    "experience.project3.year": "2024",
    "experience.project3.description":
      "Created an e-commerce shoe website with shopping cart, payment, and order management features.",
    "experience.project3.tech": "React.js, NodeJs, MongoDB, Cloudinary",

    "experience.techUsed": "Technologies used:",

    // Skills Section
    "skills.title": "Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Tools",

    // Projects Section
    "projects.title": "Projects",
    "projects.ecommerce.title": "GoOhNo - Graduation Thesis",
    "projects.ecommerce.description":
      "A web platform for reviewing travel destinations, planning itineraries, and integrating an AI chatbot that suggests places based on user preferences.",
    "projects.taskApp.title": "Documan - Team Project",
    "projects.taskApp.description":
      "A web application for sharing study materials with features to upload, search, and review documents.",
    "projects.weatherApp.title": "Nike - Personal Project",
    "projects.weatherApp.description":
      "An e-commerce shoe website with filtering, search, shopping cart, payment, and order management.",
    "projects.liveDemo": "Deployed",
    "projects.github": "GitHub",

    // Contact Section
    "contact.title": "Contact",
    "contact.description":
      "I am always open to discussing new projects and career opportunities.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "contact.location": "Can Tho City, Vietnam",

    // Footer
    "footer.copyright": "All rights reserved.",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "vi" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const translationObj = translations[language] as Record<string, string>;
    return translationObj[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
