import Image from 'next/image';
import BookOpen from '../../public/Images/BookOpen.png';
import Location from '../../public/Images/location.png';
import Folder from '../../public/Images/FolderNotch.png';
import Chart from '../../public/Images/ChartPieSlice(1).png';
import Setting from '../../public/Images/setting.png';
import Notebook from '../../public/Images/Notebook.png';
import IdentificationBadge from '../../public/Images/IdentificationBadge.png';
import UsersThree from '../../public/Images/UsersThree.png';
import IdentificationCard from '../../public/Images/IdentificationCard.png';

export const sideMenu = [
    {
        name: "Dashboard",
        menuIcon: <Image src={Chart} alt={"chart"} width={20} height={20} />,
        url: '/dashboard',
        pages: []
    },
    {
        name: "Patients"
        , menuIcon: <Image src={UsersThree} alt={"Ellipse"} width={20} height={20} />,
        url: '/patients',
        pages: []
    },
    {
        name: "Test",
        menuIcon: <Image src={BookOpen} alt={"Ellipse"} width={20} height={20} />,
        pages: [{ title: "Test group", url: '/test', menuIcon: <Image src={BookOpen} alt={"Ellipse"} width={20} height={20} /> }]
    },
    {
        name: "Location",
        menuIcon: <Image src={Location} alt={"location"} width={18} height={21} />,
        pages: [{ title: "Test location", menuIcon: <Image src={Location} alt={"Ellipse"} width={18} height={21} />, url: '/locations' }, { title: "Tests", menuIcon: <Image src={Location} alt={"Ellipse"} width={18} height={21} />, url: '/locations' }]
    },
    {
        name: "Clients",
        menuIcon: <Image src={IdentificationCard} alt={"Ellipse"} width={20} height={20} />,
        pages: [{ title: "Client location", url: '/clients', menuIcon: <Image src={IdentificationCard} alt={"Ellipse"} width={20} height={20} />}]
    },
    {
        name: "Test kits",
        menuIcon: <Image src={Folder} alt={"Ellipse"} width={20} height={20} />,
        pages: [{ title: "Test kit", url: '/test-kits', menuIcon: <Image src={Folder} alt={"Ellipse"} width={20} height={20} />, }]
    },
    {
        name: "Configure",
        menuIcon: <Image src={Setting} alt={"setting"} width={20} height={20} />,
        url: '/',
        pages: [{ title: "Configure", menuIcon: <Image src={Setting} alt={"setting"} width={20} height={20} />, url: '/configure' }]
    },
    {
        name: "User management",
        menuIcon: <Image src={IdentificationBadge} alt={"Ellipse"} width={20} height={20} />,
        url: '/users-management',
        pages: []
    },
    {
        name: "Custom reports",
        menuIcon: <Image src={Notebook} alt={"Ellipse"} width={20} height={20} />,
        // url: '/custom-report',
        pages: []
    }];