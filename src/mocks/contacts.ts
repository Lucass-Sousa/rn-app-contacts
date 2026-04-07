export interface Contact {
  id: string;
  name: string;
  phone: string;
  photo: string;
}

export const CONTACTS_MOCK: Contact[] = [
  {
    id: "1",
    name: "Ana Oliveira",
    phone: "(85) 99123-4567",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Bruno Silva",
    phone: "(11) 98234-5678",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Carla Souza",
    phone: "(21) 97345-6789",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Daniel Santos",
    phone: "(31) 96456-7890",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Eduarda Lima",
    phone: "(41) 95567-8901",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Felipe Costa",
    phone: "(51) 94678-9012",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
  },
];
