const courses = [
    { title: "Career Guru - Advanced LinkedIn Course", image: "linkedin.jpeg", url: "https://t.ly/CbLCD" },
    { title: "Passive AI Money Machines", image: "AI money.jpeg", url: "https://t.ly/Daqsr" },
    { title: "Latest Adstera Earning Two  Methods 2024", image: "Adsetra.jpeg", url: "https://t.ly/xwc1d" },
    { title: "Daraz Sellers Paid Course", image: "Daraz.jpeg", url: "https://t.ly/2sVU2" },
    { title: "Fiverr Full Paid Course By Rishabh Sharma For Free", image: "download.png", url: "https://drive.google.com/drive/folders/1EKtbz2dSuxkzL_E0JSl9df0egsa0nSe" },
    { title: "Business Models – Super Guides Bundle", image: "business idea.jpeg", url: "https://t.ly/B2jQp" },
    { title: "Waqar Zaka School 2023 (Latest Updated)", image: "Waqar zaka.jpeg", url: "https://t.ly/_arf5" },
    { title: "Kody White – Youtube Mastery Class – $100,000+ A Month On Auto Pilot", image: "YouTube master.jpeg", url: "https://t.ly/e-egl" },
    { title: "Danavir Sarria - Ecomm Email Workshop", image: "e-commerce Email.jpeg", url: "https://t.ly/47C5H" },
    { title: "E-commerce Email Masters 2.0 By Boyuan Zhao", image: "e-commerce.jpeg", url: "https://t.ly/QHm-X" },
    { title: "Basic IT (Zero To Hero) Advance Course By Sir Armaan", image: "basic IT.jpeg", url: "https://t.ly/d7MNh" },
    { title: "Dhuruv rathee Video Editing pack", image: "dhruv rathee.jpeg", url: "https://t.ly/IYyo4" },
    { title: "Delta Batch By Apna College - Full Courses for FREE", image: "delta.jpeg", url: "https://t.ly/yGsSu" },
    { title: "Biaheza complete dropshipping 2023", image: "dropshipping.jpeg", url: "https://t.ly/KxDfq" },
    { title: "Tiktok video ads foryou sponsor paid method", image: "TikTok ads.jpeg", url: "https://t.ly/uyKku" },
    { title: "Rajeeve Mehta Paid Video Editing Complete Course For Free", image: "video editing (Rajeeve).jpeg", url: "https://t.ly/79qSQ" },
    { title: "Digital Calligraphy Full Paid Course For Free by UZAIR AHMAD", image: "calligraphy.jpeg", url: "https://t.ly/kewPo" },
    { title: "Best Amazon FBA course 'Billion Dollar Seller Summit' 2023", image: "Amazon selling.jpeg", url: "https://t.ly/2IZd4" },
    { title: "FREE TikTok Dropshipping Intermediate Course", image: "TikTok dropshipping.jpeg", url: "https://t.ly/WgycR" },
    { title: "Shahid Aawar ALL Paid Premium Courses For Free", image: "Shahid anwar.jpeg", url: "https://t.ly/hRBSR" },
    { title: "PW Skills | Data Science Masters 2.O Full Paid Course For Free", image: "Data Science.jpeg", url: "https://t.ly/rx4I2" },
    { title: "Watch Time New Method 31_12_23", image: "YouTube Watch time.jpeg", url: "https://t.ly/IFHgV" },
    { title: "Master AI Prompting Course by Tech Burner", image: "AI prompt.jpeg", url: "https://t.ly/jTarQ" },
    { title: "Dark Web Hacking Tools Collection", image: "Dark web.jpeg", url: "https://t.ly/TAyQM" },
    { title: "Forex Trading Technical & Fundamental Analysis of Financial Markets", image: "Forex Trading.jpeg", url: "https://t.ly/qlrCz" },
    { title: "Lana Sova – Rapid Email Mastery Course Become a 6-Figure Email Copywriter In As Little As 6 Weeks", image: "Email Mastery.jpeg", url: "https://t.ly/pilkv" },
    { title: "Communication Masterclass Learn how to Speak with Confidence & Clarity in 6 Weeks", image: "Communication.jpeg", url: "https://t.ly/MEbfL" },
    { title: "Jitesh Manwani : Beginner Mobile Video Editing", image: "video editing.jpeg", url: "https://t.ly/zumdk" },
    { title: "Garry Kasparov Teaches Chess", image: "Chess.jpeg", url: "https://t.ly/qgsbz" },
    { title: "Ankur Warikoo: Take Charge of Your", image: "Changing Your.jpeg", url: "https://t.ly/qgsbz" },
    { title: "The Freelance Freedom By Mohak", image: "Freelancing.jpeg", url: "https://t.ly/hmvr0" },
    { title: "Total value 300,00 USD+", image: "Microsoft.jpeg", url: "https://t.ly/PZmeT" },
    { title: "GBOB Batch 42 By Shahzad Mirza", image: "GBOB.jpeg", url: "https://t.ly/Ob_YN" },
    { title: "Luke Belmars Money Plan", image: "Luke Belmars.jpeg", url: "https://t.ly/Yz-wG" },
    { title: "Sheikh Zaheer Abbas Adsense Course (Part 1 + Part 2)", image: "Google Adsense.jpeg", url: "https://t.ly/DXODV" },
    { title: "Amazon Course By Ecom Surgeon (Tech Zone) 2024 | Batch 4", image: "Amazon.jpeg", url: "https://t.ly/pkQ4R" },
    { title: "The Complete Digital Marketing Course 30 in 1", image: "Digital marketing.jpeg", url: "https://t.ly/A2U4o" },
    { title: "OSED Notes: Offensive Security Exploit Developer", image: "OSCP Notes.png", url: "https://t.ly/BtC6c" },
    { title: "Seo A To Z Complete Guide to building amazon affiliate sites course", image: "SEO.jpeg", url: "https://t.ly/1ORjy" },
    { title: "Latest YouTube earning Course", image: "YouTube Course.jpeg", url: "https://t.ly/CUjdK" },
    { title: "IDM Pakistan Digital Marketing Course 2024", image: "IDM Pakistan.jpeg", url: "https://t.ly/rXNoE" },
    { title: "Danavir Sarria - Ecomm Email Workshop", image: "e-commerce Email.jpeg", url: "https://t.ly/47C5H" },
    { title: "Dhuruv rathee Video Editing pack", image: "dhruv rathee.jpeg", url: "https://t.ly/IYyo4" },
    { title: "Digital Calligraphy Full Paid Course For Free by UZAIR AHMAD", image: "calligraphy.jpeg", url: "https://t.ly/kewPo" },
    { title: "Best Amazon FBA course 'Billion Dollar Seller Summit' 2023", image: "Amazon selling.jpeg", url: "https://t.ly/2IZd4" },
    { title: "Shahid Aawar ALL Paid Premium Courses For Free", image: "Shahid anwar.jpeg", url: "https://t.ly/hRBSR" },
    { title: "Watch Time New Method 31_12_23", image: "YouTube Watch time.jpeg", url: "https://t.ly/IFHgV" },
    { title: "Dark Web Hacking Tools Collection", image: "Dark web.jpeg", url: "https://t.ly/TAyQM" },
    { title: "Forex Trading Technical & Fundamental Analysis of Financial Markets", image: "Forex Trading.jpeg", url: "https://t.ly/qlrCz" },
    { title: "Lana Sova – Rapid Email Mastery Course Become a 6-Figure Email Copywriter In As Little As 6 Weeks", image: "Email Mastery.jpeg", url: "https://t.ly/pilkv" },
    { title: "Communication Masterclass Learn how to Speak with Confidence & Clarity in 6 Weeks", image: "Communication.jpeg", url: "https://t.ly/MEbfL" },
];


// Add more courses as needed



const courseContainer = document.getElementById("courseContainer");

// Function to create course boxes
function createCourseBox(course) {
  const div = document.createElement("div");
  div.classList.add("course-box");

  const anchor = document.createElement("a");
  anchor.href = course.url;
  anchor.target = "_blank"; // Open link in a new tab
  div.appendChild(anchor);

  const img = document.createElement("img");
  img.src = course.image;
  anchor.appendChild(img);

  const title = document.createElement("div");
  title.classList.add("course-title");
  title.textContent = course.title;
  div.appendChild(title);

  courseContainer.appendChild(div);
}

// Initial load of course boxes
courses.forEach(createCourseBox);

// Search functionality
document.getElementById("searchInput").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();

  // Remove all existing course boxes
  courseContainer.innerHTML = "";

  // Filter courses based on the search term
  const filteredCourses = courses.filter(course => {
    return course.title.toLowerCase().includes(searchTerm);
  });

  // Create and display course boxes for filtered courses
  filteredCourses.forEach(createCourseBox);
});