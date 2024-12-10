import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen" style={{paddingLeft: '20px', paddingRight: '20px', marginTop: '60px'}}>
      <main className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">අප හා සම්බන්ධ වන්න...</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">ශ්‍රී ජයවර්ධනාරාමය විහාඑස්ථානය - මාහේන</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">දුරකථන අංක</h3>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-600">
                    <i className="fas fa-phone-alt w-6"></i>
                    <span>ස්ථාවර දුරකථනය: +94 XX XXX XXXX</span>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <i className="fas fa-mobile-alt w-6"></i>
                    <span>ජංගම දුරකථනය: +94 XX XXX XXXX</span>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <i className="fab fa-whatsapp w-6"></i>
                    <span>WhatsApp අංකය: +94 XX XXX XXXX</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">ලිපිනය</h3>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-600">
                    <i className="fas fa-map-marker-alt w-6"></i>
                    <span>ශ්‍රී ජයවර්ධනාරාමය විහාරස්ථානය,<br />මාහේන,<br />මණ්ඩාවල</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
