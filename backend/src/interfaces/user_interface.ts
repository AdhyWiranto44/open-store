export default interface UserInterface {
  role_id: Number;
  status_id: Number;
  username: String;
  password: String;
  full_name: String;
  email: String;
  phone_number: String;
  birthday: Date;
  profile_photo?: String;
  created_at: Date;
  updated_at: Date;
}