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
      "Shanawaz Patwary",
      "Shah Abu Alam",
      "Fukrullah Khan",
      "Nancy Patwary",
      "Illias Patwary",
      "Siddique Alam",
      "Zafor Alam"
    ],
[
      "Akbar",
      "Basith",
      "Maiz",
      "Jahid",
      "Suffer",
      "Suhan",
      "Nasim",
      "Jan",
      "Tahmim",
      "Jamin"
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
      "Riya",
      "Farhan",
      "Mahira",
      "Maisha",
      "Tabby",
      "Sanjida",
      "Ananna",
      "Arif",
      "Nashy",
      "Khaled"
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
      "Ayon",
      "Saif",
      "Fazle",
      "Navid",
      "Kerwin",
      "Shahara",
      "Sherin"
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
      "Ziggy Hussain",
      "Abul Hussain",
      "Fatema Hussain",
      "Shamsul Hussain",
      "Julie Hussain",
      "Arfa Hussain",
      "Mahdi Rahim",
      "Manha Rahim",
      "Rahim Ahm",
      "Titi Rahim"
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
      "Maliha Rahim",
      "Asibul Hoque",
      "Laisa Hoque",
      "Mr. Hoque",
      "Mrs. Ayesha",
      "Masum Hafiz",
      "Insaf Hafiz",
      "Shawn Emran",
      "Samiha Emran",
      "Mukit Kabir",
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
      "Refa Kabir"
    ],
    [
      "Sakif Chowdhury",
      "Suiba Chodhury",
      "Tasneem Chowdhury",
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
      "Tahani Bhuiyan",
      "Elena Bhuiyan",
    ],



  ]

  return (
    <main>
    <div className="flex flex-col items-center min-h-[80vh] bg-[url('/bw.jpg')] bg-cover bg-top md:bg-cover md:bg-center md:min-h-[100vh] lg:min-h-[130vh]  bg-no-repeat">
      <div
        className={`${pangaia.className} flex flex-col items-center text-4xl md:text-7xl py-12 md:py-32 lg:py-80 text-black md:text-soft max-w-screen-sm`}
      >
        Alvi & Prity
        <span className={`${script.className} text-3xl md:text-4xl`}>Please be seated</span>
      </div>
    </div>

    <div className="py-10">
      {/* <SeatingChart tableName="Table One" names={seatingChart.table1} />
      <SeatingChart tableName="Table Two" names={seatingChart.table2} /> */}

      
{seatingChart.map((table, index) => (
          <SeatingChart key={index} tableName={`Table ${index + 1}`} names={table} />
        ))}
    </div>
    </main>
  );
}
