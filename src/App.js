import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Lock, 
  Globe, 
  Zap, 
  AlertTriangle, 
  ShieldCheck, 
  UserX, 
  Mail, 
  Database,
  Smartphone,
  ChevronRight,
  Info
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('types');

  const attackTypes = [
    {
      id: 'phishing',
      title: 'Phishing',
      titleTh: 'ฟิชชิ่ง',
      icon: <Mail className="w-8 h-8 text-blue-400" />,
      description: 'การหลอกลวงผ่านอีเมลหรือข้อความเพื่อขโมยข้อมูลส่วนตัว เช่น รหัสผ่าน หรือเลขบัตรเครดิต',
      severity: 'สูง',
      color: 'blue'
    },
    {
      id: 'malware',
      title: 'Malware',
      titleTh: 'มัลแวร์',
      icon: <Smartphone className="w-8 h-8 text-red-400" />,
      description: 'ซอฟต์แวร์อันตราย (ไวรัส, เวิร์ม) ที่ถูกออกแบบมาเพื่อเข้าถึงหรือทำลายระบบคอมพิวเตอร์',
      severity: 'ปานกลาง-สูง',
      color: 'red'
    },
    {
      id: 'ransomware',
      title: 'Ransomware',
      titleTh: 'แรนซัมแวร์',
      icon: <Lock className="w-8 h-8 text-purple-400" />,
      description: 'มัลแวร์เรียกค่าไถ่ที่ทำการล็อกไฟล์ข้อมูลของคุณ และเรียกร้องเงินแลกกับการถอดรหัส',
      severity: 'วิกฤต',
      color: 'purple'
    },
    {
      id: 'ddos',
      title: 'DDoS Attack',
      titleTh: 'การโจมตี DDoS',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      description: 'การส่งทราฟฟิกจำนวนมหาศาลไปยังเว็บไซต์เป้าหมายจนเซิร์ฟเวอร์ล่มและใช้งานไม่ได้',
      severity: 'ปานกลาง',
      color: 'yellow'
    }
  ];

  const preventionSteps = [
    { title: 'ใช้รหัสผ่านที่ซับซ้อน', desc: 'ผสมผสานตัวอักษร ตัวเลข และสัญลักษณ์', icon: <Lock className="w-5 h-5" /> },
    { title: 'เปิดใช้งาน MFA/2FA', desc: 'การยืนยันตัวตนสองชั้นเพิ่มความปลอดภัยอย่างมาก', icon: <ShieldCheck className="w-5 h-5" /> },
    { title: 'อัปเดตซอฟต์แวร์สม่ำเสมอ', desc: 'เพื่ออุดช่องโหว่ความปลอดภัยที่แฮกเกอร์อาจใช้', icon: <Database className="w-5 h-5" /> },
    { title: 'ระวังลิงก์แปลกปลอม', desc: 'ตรวจสอบที่มาของอีเมลและลิงก์ก่อนคลิกเสมอ', icon: <AlertTriangle className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans">
      {/* Header Section */}
      <header className="max-w-5xl mx-auto text-center mb-12">
        <div className="inline-block p-3 rounded-2xl bg-red-500/10 border border-red-500/20 mb-4">
          <ShieldAlert className="w-12 h-12 text-red-500 animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
          Cyber Attack Awareness
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          ภัยคุกคามทางไซเบอร์ไม่ใช่เรื่องไกลตัว มาร่วมทำความเข้าใจและเตรียมพร้อมรับมือกับอันตรายในโลกดิจิทัล
        </p>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-5xl mx-auto mb-8 flex justify-center space-x-2">
        <button 
          onClick={() => setActiveTab('types')}
          className={`px-6 py-2 rounded-full transition-all ${activeTab === 'types' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`}
        >
          ประเภทภัยคุกคาม
        </button>
        <button 
          onClick={() => setActiveTab('prevention')}
          className={`px-6 py-2 rounded-full transition-all ${activeTab === 'prevention' ? 'bg-green-600 text-white shadow-lg shadow-green-600/20' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`}
        >
          วิธีป้องกัน
        </button>
      </div>

      <main className="max-w-5xl mx-auto">
        {activeTab === 'types' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {attackTypes.map((attack) => (
              <div key={attack.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-600 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800 group-hover:scale-110 transition-transform">
                    {attack.icon}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                    attack.severity === 'วิกฤต' ? 'text-red-400 border-red-400/30 bg-red-400/10' : 
                    attack.severity === 'สูง' ? 'text-orange-400 border-orange-400/30 bg-orange-400/10' : 
                    'text-yellow-400 border-yellow-400/30 bg-yellow-400/10'
                  }`}>
                    ความรุนแรง: {attack.severity}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">{attack.title}</h3>
                <h4 className="text-sm font-medium text-slate-500 mb-3">{attack.titleTh}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {attack.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <ShieldCheck className="mr-2 text-green-500" /> 
                  Checklist การป้องกัน
                </h2>
                {preventionSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors">
                    <div className="mt-1 p-2 bg-green-500/20 text-green-400 rounded-lg">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{step.title}</h4>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-800/30 rounded-2xl p-6 flex flex-col justify-center border border-slate-700/50">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-blue-500/10 rounded-full mb-4">
                    <Globe className="w-10 h-10 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">สถิติที่น่าสนใจ</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-900 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-red-500">91%</div>
                    <div className="text-sm text-slate-400">ของการโจมตีเริ่มต้นที่ "Phishing Email"</div>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-500">39 วินาที</div>
                    <div className="text-sm text-slate-400">ค่าเฉลี่ยที่เกิดการพยายามแฮกข้อมูลทั่วโลก</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer / Call to action */}
      <footer className="max-w-5xl mx-auto mt-12 pb-12">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold flex items-center">
              <Info className="mr-2 w-5 h-5 text-blue-400" /> 
              จำไว้ว่า: "ความปลอดภัยเริ่มที่ตัวคุณ"
            </h3>
            <p className="text-sm text-slate-400">อย่าคลิกลิงก์ที่ไม่มั่นใจ และอัปเดตระบบปฏิบัติการของคุณให้เป็นปัจจุบันเสมอ</p>
          </div>
          <button 
            className="flex items-center px-6 py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-blue-50 transition-colors"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            เรียนรู้เพิ่มเติม <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
        <p className="text-center mt-8 text-slate-600 text-xs">
          © 2024 Cybersecurity Interactive Infographic | สำหรับการศึกษาและสร้างความตระหนักรู้
        </p>
      </footer>
    </div>
  );
};

export default App;