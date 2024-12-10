import React from 'react';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen" style={{paddingLeft: '20px', paddingRight: '20px', marginTop: '60px'}}>
      <main className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">
            ශ්‍රී ජයවර්ධනාරාමය - මාහේන
          </h1>
          
          <div className="prose lg:prose-xl">
            <p className="text-gray-700 leading-relaxed mb-6">
              මහේන ශ්‍රී ජයවර්ධනාරාම විහාරස්ථානයේ පොහොසත් ඉතිහාසය සහ සජීවී ප්‍රජාව පෙන්නුම් කරන අපගේ ඩිජිටල් 
              ඡායාරූප එකතුවට සාදරයෙන් පිළිගනිමු. මෙම ඡායාරූප ඇල්බමය කාලය හරහා දර්ශනීය ගමනක් ලෙස අපගේ පන්සලේ 
              උරුමය සහ අපගේ ප්‍රජාව හැඩගැස්වූ විශේෂ අවස්ථාවන් සටහන් කරයි.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              මෙම ඡායාරූප හරහා අපි පන්සලේ වැදගත් උත්සව, සංස්කෘතික අවස්ථාවන් සහ දෛනික ජීවිතය ලේඛනගත කරමු. 
              සෑම රූපයක්ම අපගේ පන්සල අනන්‍ය කරන භක්තිය, සම්ප්‍රදාය සහ ප්‍රජා හැඟීමේ කතාවක් කියනු ලබයි.
            </p>

            <p className="text-gray-700 leading-relaxed">
              අපගේ එකතුව තුළින් අපගේ පන්සලේ ගෘහ නිර්මාණ ශිල්පයේ සුන්දරත්වය, ආගමික උත්සවවල 
              ගාම්භීරත්වය සහ එක් පවුලක් ලෙස අප එක්කාසු කරන ප්‍රජා උත්සවවල සතුට අත්විඳින්න.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
