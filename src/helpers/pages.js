import Image from 'next/image';
import BookOpen from '../../public/Images/svg/BookOpen.svg';
import Location from '../../public/Images/svg/Location.svg';
// import Folder from '../../public/Images/FolderNotch.png';
import Chart from '../../public/Images/svg/ChartPieSlice.svg';
import Setting from '../../public/Images/svg/CarbonSettings.svg';
// import Notebook from '../../public/Images/Notebook.png';
import IdentificationBadge from '../../public/Images/IdentificationBadge.png';
import UsersThree from '../../public/Images/svg/UsersThree.svg';
import IdentificationCard from '../../public/Images/svg/IdentificationBadge.svg';
import PublicIcon from '@mui/icons-material/Public';
import BiotechIcon from '@mui/icons-material/Biotech';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const sideMenu = [
    {
        name: "Dashboard",
        menuIcon: <Image src={Chart} alt={"chart"} width={20} height={20} />,
        url: '/dashboard',
        pages: []
    },
    {
        name: "Appointments"
        , menuIcon: <Image src={UsersThree} alt={"Ellipse"} width={20} height={20} />,
        url: '/appointments',
        pages: []
    },
    {
        name: "Patients"
        , menuIcon: <Image src={UsersThree} alt={"Ellipse"} width={20} height={20} />,
        url: '/patients',
        pages: []
    },
    {
        name: "Test orders",
        menuIcon: <Image src={BookOpen} alt={"Ellipse"} width={20} height={20} />,
        url: '/test',
        pages: []
        // pages: [{ title: "Test group", url: '/test', menuIcon: <Image src={BookOpen} alt={"Ellipse"} width={20} height={20} /> }]
    },
   // {
    //     name: "Location",
    //     menuIcon: <Image src={Location} alt={"location"} width={18} height={21} />,
    //     url: '/locations',
    //     pages: []
        // pages: [{ title: "Test location", menuIcon: <Image src={Location} alt={"Ellipse"} width={18} height={21} />, url: '/locations' }]
    // },
    // {
    //     name: "Clients",
    //     menuIcon: <Image src={IdentificationCard} alt={"Ellipse"} width={20} height={20} />,
    //     pages: [{ title: "Client location", url: '/clients', menuIcon: <Image src={IdentificationCard} alt={"Ellipse"} width={20} height={20} />}]
    // },
    // {
    //     name: "Test kits",
    //     menuIcon: <Image src={Folder} alt={"Ellipse"} width={20} height={20} />,
    //     pages: [{ title: "Test kit", url: '/test-kits', menuIcon: <Image src={Folder} alt={"Ellipse"} width={20} height={20} />, }]
    // },
    {
        name: "Configuration",
        menuIcon: <Image src={Setting} alt={"setting"} width={20} height={20} />,
        url: '/configure',
        pages: [{ title: "Country", menuIcon:
        <PublicIcon color='primary' sx={{ fontSize: 20 }}/> 
        // <Image src={Setting} alt={"setting"} width={20} height={20} />
        , url: '/configure' },
        { title: "Test", menuIcon: 
        <BiotechIcon color='primary' sx={{ fontSize: 22 }}/>,
        // <Image src={Setting} alt={"setting"} width={20} height={20} />,
         url: '/configure/test-configure' },
        { title: "Location", menuIcon: 
        <LocationOnIcon color='primary' sx={{ fontSize: 22 }}/>,
        // <Image src={Location} alt={"location"} width={18} height={21} />,
         url: '/locations' },
        { title: "Test Combo", menuIcon: 
        <BiotechIcon color='primary' sx={{ fontSize: 22 }}/>,
        // <Image src={Setting} alt={"setting"} width={20} height={20} />,
         url: '/configure/test-combo' },
    ]
    },
    {
        name: "Employee management",
        menuIcon: <Image src={IdentificationCard} alt={"Ellipse"} width={20} height={20} />,
        url: '/users-management',
        pages: []
    },
    // {
    //     name: "Custom reports",
    //     menuIcon: <Image src={Notebook} alt={"Ellipse"} width={20} height={20} />,
    //     // url: '/custom-report',
    //     pages: []
    // }
];