import { RiAccountCircleFill } from "react-icons/ri";
import { FaUserEdit, FaUserPlus, FaUserTag } from "react-icons/fa";
import { FcCalendar, FcContacts, FcComboChart } from "react-icons/fc";

export const patientLinks = [
  {
    id: 3,
    title: "New Patient",
    url: "/patient-create",
    icon: <FaUserPlus></FaUserPlus>,
  },
  {
    id: 4,
    title: "Patients List",
    url: "/patient-list",
    icon: <FaUserTag></FaUserTag>,
  },
  {
    id: 5,
    title: "Patient's Chart",
    url: "/patient-chart",
    icon: <FaUserEdit></FaUserEdit>,
  },
];

export const dentistLinks = [
  {
    id: 6,
    title: "New Dentist",
    url: "/dentist-create",
    icon: <FaUserPlus></FaUserPlus>,
  },
  {
    id: 7,
    title: "Dentists List",
    url: "/dentist-list",
    icon: <FaUserTag></FaUserTag>,
  },
  {
    id: 8,
    title: "Dentist's Chart",
    url: "/dentist-chart",
    icon: <FaUserEdit></FaUserEdit>,
  },
];

export const dataLinks = [
  {
    id: 9,
    title: "Patients Per Day",
    url: "/data-patients-day",
    icon: <FcCalendar></FcCalendar>,
  },
  {
    id: 10,
    title: "Dentist RDV",
    url: "/data-dentists-rdv",
    icon: <FcContacts></FcContacts>,
  },
  {
    id: 11,
    title: "Insurance Statistics",
    url: "/patients-insurance",
    icon: <FcComboChart></FcComboChart>,
  },
];

export const mockUser = {
  id: 1,
  username: "Username",
  email: "email@email.com",
  imageUrl: <RiAccountCircleFill></RiAccountCircleFill>,
};
