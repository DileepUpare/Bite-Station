interface Link {
  name: string;
  link: string;
}

interface FooterItemProps {
  Links: Link[];
  title: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ Links, title }) => {
  return (
    <ul>
       <h1 className="mb-1 font-goliBold">{title}</h1>
       {
         Links.map((Link) => (
            <li key={Link.name}>
                <a className="font-goliMedium text-gray-400 hover:text-teal-400 duration-300
                 text-sm cursor-pointer leading-6" href={Link.link}>{Link.name}</a>
            </li>
         ))
       }
    </ul>
  );
};

export default FooterItem;
