export default interface EventCardType {
  _id: string;
  _createdAt: string;
  title: string;
  tagline: string;
  season: number;
  year: number;
  start_datetime: string;
  end_datetime: string;
  date_label: string;
  location_nickname: string;
  city: string;
  state: string;
  slug: string;
  cld_id: string;
  alt: string;
  organizer: {
    name: string;
    logo: string;
  }
}
