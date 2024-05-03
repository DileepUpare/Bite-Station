import FooterItem from "./FooterItem";
import { SUPPORT, ABOUTUS, RESTAURANTS, LEARNMORE } from "./FooterMenus";
const FooterItemContainer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
            <FooterItem Links={ABOUTUS} title="ABOUT BITE STATION" />
            <FooterItem Links={RESTAURANTS} title="FOR RESTAURANTS" />
            <FooterItem Links={LEARNMORE} title="LEARN MORE" />
            <FooterItem Links={SUPPORT} title="SUPPORT" />
        </div>
    )
};

export default FooterItemContainer;