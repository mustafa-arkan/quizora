import { FiGithub,FiLinkedin,FiFacebook, FiMail } from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/mustafa-arkan',
	},
	{
		id: 2,
		icon: <FiMail />,
		url: 'mailto: arkancse@gmail.com',
	},
	{
		id: 3,
		
        icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/md-mustafa-arkan/',
	},
	{
		id: 4,
		icon: <FiFacebook />,
		url: 'https://www.facebook.com/profile.php?id=100008516529245',
	},
];

const AppFooter = () => {
	return (
		<div className=" mx-auto text-orange-600   bg-black-600">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light ">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Follow us
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;