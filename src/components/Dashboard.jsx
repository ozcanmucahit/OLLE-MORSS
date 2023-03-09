import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {  signOut } from "firebase/auth";
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom';


function Dashboard({ email, password, info }) {
  console.log(email,password,info)
  const [veri, SetVeri] = useState([])
  const [datas,setDatas] = useState(false)
  const [selectedOption, setSelectedOption] = useState("");
  const [SelectDeger, setSelectDeger] = useState();
  const [AllData, setAllData] = useState([])



  useEffect(() => {
    const morseCodeMap = {
      '.-': 'A',
      '-...': 'B',
      '-.-.': 'C',
      '-..': 'D',
      '.': 'E',
      '..-.': 'F',
      '--.': 'G',
      '....': 'H',
      '..': 'I',
      '.---': 'J',
      '-.-': 'K',
      '.-..': 'L',
      '--': 'M',
      '-.': 'N',
      '---': 'O',
      '.--.': 'P',
      '--.-': 'Q',
      '.-.': 'R',
      '...': 'S',
      '-': 'T',
      '..-': 'U',
      '...-': 'V',
      '.--': 'W',
      '-..-': 'X',
      '-.--': 'Y',
      '--..': 'Z',
      '-----': '0',
      '.----': '1',
      '..---': '2',
      '...--': '3',
      '....-': '4',
      '.....': '5',
      '-....': '6',
      '--...': '7',
      '---..': '8',
      '----.': '9',
      '/': ' '
    };
    
      const decodeMorseCode = (encodedString) => {
        const decoded = encodedString
          .split(' ')
          .map((code) => morseCodeMap[code] || code)
          .join('');
        console.log(`Decoded '${encodedString}' as '${decoded}'`);
        return decoded;
      };
    
      const Deger = async () => {
        const decodeMorseCode = (encodedString) => {
          const decoded = encodedString
            .split(' ')
            .map((code) => morseCodeMap[code] || code)
            .join('')
            .replace(/ /g, '_'); 
          console.log(`Decoded '${encodedString}' as '${decoded}'`);
          return decoded;
        };
      
        try {
          const response = await axios.post('http://ik.olleco.net/morse-api/', {
            command: ` ${SelectDeger}`
          });
          const decodedResponse = decodeMorseCode(JSON.stringify(response.data, null, 2))
          console.log(decodedResponse.replace(/\./g, ' ').replace(/\-/g, ' ').replace(/\_/g, ' '))
          setAllData(decodedResponse.replace(/\./g, ' ').replace(/\-/g, ' ').replace(/\_/g, ' '))
        } catch (error) {
          console.error(error);
        }
    };
    Deger()
    Veriler()
  })

  //cpu verilerini yazdırıyorum ama diger mors kodlarını bir türlü yazdıramadım bende böyle select adında bir
  //çözümle en azından gelen verileri görün diye çözüm bulmaya çalıştım eminimki üstünde uğraşsam belkide çözücem.
  //birde şöyle bir sorun var, select edince sadece cpu ve arch degerleri görüyorum diger tiplerde key hataları var
  //ama şuanlık bu kadar yapabildim umarım beğenirsiniz.
  //teşekkürler.

  const Veriler = async () => {
  
    const morseCodeMap = {
      // morse kod harita objesi
      '.-': 'A',
      '-...': 'B',
      '-.-.': 'C',
      '-..': 'D',
      '.': 'E',
      '..-.': 'F',
      '--.': 'G',
      '....': 'H',
      '..': 'I',
      '.---': 'J',
      '-.-': 'K',
      '.-..': 'L',
      '--': 'M',
      '-.': 'N',
      '---': 'O',
      '.--.': 'P',
      '--.-': 'Q',
      '.-.': 'R',
      '...': 'S',
      '-': 'T',
      '..-': 'U',
      '...-': 'V',
      '.--': 'W',
      '-..-': 'X',
      '-.--': 'Y',
      '--..': 'Z',
      '-----': '0',
      '.----': '1',
      '..---': '2',
      '...--': '3',
      '....-': '4',
      '.....': '5',
      '-....': '6',
      '--...': '7',
      '---..': '8',
      '----.': '9',
      '/': ' '
    };
    
      const decodeMorseCode = (encodedString) => {
        const decoded = encodedString
          .split(' ')
          .map((code) => morseCodeMap[code] || code)
          .join('');
        console.log(`Decoded '${encodedString}' as '${decoded}'`);
        return decoded;
      };
    
      const ServerPost = async () => {
        const decodeMorseCode = (encodedString) => {
          const decoded = encodedString
            .split(' ')
            .map((code) => morseCodeMap[code] || code)
            .join('')
            .replace(/ /g, '_'); 
          console.log(`Decoded '${encodedString}' as '${decoded}'`);
          return decoded;
        };
      
        try {
          const response = await axios.post('http://ik.olleco.net/morse-api/', {
            command: `-.-. .--. ..-`
          });
          const decodedResponse = decodeMorseCode(JSON.stringify(response.data, null, 2))
          SetVeri(decodedResponse.replace(/\./g, ' ').replace(/\-/g, ' ').replace(/\_/g, ' '))
          setDatas(true)
        } catch (error) {
          console.error(error);
        }
    };
    ServerPost()
  }
  

  const navigate = useNavigate();

  const ServerOut = () => {               
    signOut(auth).then(() => {
          navigate("/");
      }).catch((error) => {
        console.log(error, error.message)
      });
  }
  
  const SelectChange = e => {
    console.log(e.target.value)
  }
// parsedDat.data[0].speed, parsedDat.data[0].times.user, parsedDat.data[0].times.idle

  
const morseCodes = {
  CPU: "-.-. .--. ..-",
  ARCH: ".- .-. -.-. ....",
  FREEMEM: "..-. .-. . . -- --",
  HOSTNAME: ".... --- ... -",
  PLATFORM: ".--. .-.. .-. ..- --.",
  TOTALMEM: "- --- - .-.. .-",
  TYPE: "- -.-- .--.",
  UPTIME: "..- .--. - ..- -- ."
  };


   const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    const morseCode = morseCodes[selectedValue];
     console.log(morseCode);
     setSelectDeger(morseCode)
     setSelectedOption(selectedValue);
  };

  console.log(SelectDeger)

  
  return (
    <div className=''>
      {info == true && email && password &&(
        <div className='w-screen'>
          <div className='bg-red-500 h-8'>
            <ul className='flex justify-end text-white mr-32'>
              <li className='flex gap-x-2'>Hoşgeldin <p className='text-black'>{email}</p></li>
            </ul>
          </div>
          <div className='flex justify-center gap-x-32 mt-32' >
            <button onClick={Veriler} className='px-2 py-2 bg-black text-white h-32 w-[200px]'>CPU</button>
            <button onClick={ServerOut} className='px-2 py-2 text-center text-white w-[200px] bg-green-500 h-32'>Çıkış Yap</button>
            <select value={selectedOption} onChange={handleOptionChange} className='bg-black text-center text-white'>
              <option value="">Veri Türü Seç</option>
              <option value="CPU">CPU</option>
              <option value="ARCH">ARCH</option>
              <option value="FREEMEM">FREEMEM</option>
              <option value="HOSTNAME">HOSTNAME</option>
              <option value="PLATFORM">PLATFORM</option>
              <option value="TOTALMEM">TOTALMEM</option>
              <option value="TYPE">TYPE</option>
              <option value="UPTIME">UPTIME</option>
          </select>
          </div>

      <div className='flex justify-center flex-row gap-x-32   mt-16'>
          <div className=' shadow-md  mt-4 w-32 bg-blue-500 text-white'>{AllData}</div>
          <div className='mt-2 border ml-2  shadow-md w-32 h-[200px]  px-2 py-2 bg-pink-400 text-white  '>
              {datas === true && [JSON.parse(veri)].map((item) => {
              console.log(item)
              const { model, speed, times } = item.data[0];
              return (
                <div key={model} >
               
                <p>Model: {model}</p>
                <p>Speed: {speed}</p>
                <p>User: {times.user}</p>
                <p>İdle: {times.idle}</p>
              </div>
              );
              })}
             
          </div>
          </div>
          <div>
          </div>
          </div>
      ) 
      }
    </div>
  );
};

export default Dashboard;