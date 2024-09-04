"use client";

import SeatingChart from "@/components/SeatingChart/SeatingChart";

import localFont from "next/font/local";
const pangaia = localFont({ src: "../../../public/PPPangaia-Medium.ttf" });
const script = localFont({ src: "../../../public/script.ttf" });

export default function Seats() {


  const seatingChart = [
[
      "Tahmina",
      "Priya",
      "Ilan",
      "Mosh",
      "Jahnie",
      "Parul",
      "Ruba",
      "Rita",
      "Rukeya",
      "Shami"
    ],
 [
      "Nasima Sultana",
      "Mohammed Amin",
      "Dalia Newaz",
      "Shanewaz Patwary",
      "Shah Abu Alam",
      "Fukrullah Khan",
      "Nancy Patwary",
      "Illias Patwary",
      "Siddique Alam",
      "Zafor Alam"
    ],

    [
      "Riya",
      "Mahira",
      "Tabby",
      "Tahmim",
      "Nasim",
      "Maisha",
      "Sanjida",
      "Ananna",
      "Arif",
      "Jan"
    ],

    [
      "Jenita Khan",
      "Zafir Alam",
      "Zayeer Alam",
      "Nasif Khan",
      "Sumu Khan",
      "Rafa Redwana",
      "Luba Shahnaz",
      "Mr. Anwar",
      "Ayesha Patwary",
      "Mrs. Akhter"
    ],
    [
      "Jamin",
      "Khaled",
      "Saif",
      "Navid",
      "Kerwin",
      "Suhan",
      "Nashy",
      "Ayon",
      "Fazle",
      "Shahara"
    ],

    [
      "Zahir Alam ",
      "Mita Alam",
      "Zahin Alam",
      "Uzzal Biswas",
      "Tusi Biswas",
      "Gibran Biswas",
      "Mother of Uzzal",
      "Dr. Taher Ali",
      "Nupur Rahman",
      "Mr. Rahman"
    ],

    [
      "Sherin",
      "Farhan",
      "Basith",
      "Jahid",
      "Akbor",
      "Maiz",
      "Sufer",
      "Abul Hussain",
      "Ziggy Hussain",
      "Fatema Hussain"
    ],

    [
      "Walid Rahman",
      "Anand Rahman",
      "Sovon Chowdhury",
      "Nizam Chowdhury",
      "Babli Hassan",
      "Hassan Mahmood",
      "Mrs. Ruby",
      "Mr. Shah",
      "Mamun Hassan",
      "Tanzila Hassan"
    ],

    [
      "Shamsul Hussain",
      "Julie Hussain",
      "Arfa Hussain",
      "Mahdi Rahim",
      "Manha Rahim",
      "Rahim Ahm",
      "Titi Rahim",
      "Maliha Rahim",
      "Asibul Hoque",
      "Laisa Hoque"
    ],

    [
      "Tafheem Hassan",
      "Monu Abedin",
      "Khuki Ullah",
      "Sakhawat Ullah",
      "Mohamed Alam",
      "Rehana Alam",
      "Ruby Bhuiyan",
      "Tazul Bhuiyan",
      "Lucky Kabir",
      "Mohammed Kabir"
    ],

    [
      "Mr. Hoque",
      "Mrs. Ayesha",
      "Masum Hafiz",
      "Insaf Hafiz",
      "Shawn Emran",
      "Samiha Emran",
      "Mukit Kabir",
      "Sakif Chowdhury",
      "Suiba Chodhury",
      "Tasneem Chowdhury",
    ],

    [
      "Afrim Gjekovic",
      "Daniel Targonski",
      "Edona Djonbalaj",
      "Victoria Zimmerman",
      "Niko Liandrakis",
      "Gabe Alwi",
      "Rezwan Islam",
      "Syed Kabir",
      "Refa Kabir",
      "Elena Bhuiyan"
    ],
    [
      "Arnab Hassan",
      "Erin Hassan",
      "Rafid Alam",
      "Saif Alam",
      "Usman Ashraf",
      "Aisha Ashraf",
      "Alizeh Ashraf"
    ],

    [
      "Rabi Bhuiyan",
      "Israt Rici",
      "Rejwana Bhuiyan",
      "Tashin Bhuiyan",
      "Tahani Bhuiyan"
    ],



  ]

  return (
    <main>
    <div className="flex flex-col items-center min-h-[80vh] bg-[url('/bw.jpg')] bg-cover bg-top md:bg-cover md:bg-center md:min-h-[100vh] lg:min-h-[130vh]  bg-no-repeat">
      <div
        className={`${pangaia.className} flex flex-col items-center text-6xl 
        md:text-7xl py-12 md:py-32 lg:py-80 text-black md:text-soft max-w-screen-sm`}
      >
        <span className="">Alvi & Prity</span>
        <span className={`${script.className} text-3xl md:text-4xl`}>Please be seated</span>
      </div>
    </div>

    <div className="py-10">

      
{seatingChart.map((table, index) => (
          <SeatingChart key={index} tableName={`Table ${index + 1}`} names={table} />
        ))}
    </div>
    </main>
  );
}
