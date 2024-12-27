import React from 'react'

export default function SmallScreenStateChanger() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 375);
      };

      checkScreenSize();
      window.addEventListener("resize", checkScreenSize); 

      return () => window.removeEventListener("resize", checkScreenSize); 
    }, []);

    return;

}
