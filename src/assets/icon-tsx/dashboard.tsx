interface DashboardIconProps extends React.SVGProps<SVGSVGElement> {}

const DashboardIcon = (props: DashboardIconProps) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.7075 22.6218V12.2039H22.0439V22.6218H13.7075ZM3.28697 14.2874V3.86951H11.6234V14.2874H3.28697ZM9.53927 12.2039V5.9531H5.37107V12.2039H9.53927ZM3.28697 22.6218V16.371H11.6234V22.6218H3.28697ZM5.37107 20.5382H9.53927V18.4546H5.37107V20.5382ZM15.7916 20.5382H19.9598V14.2874H15.7916V20.5382ZM13.7075 3.86951H22.0439V10.1203H13.7075V3.86951ZM15.7916 5.9531V8.03669H19.9598V5.9531H15.7916Z"
        fill="#B8B4CC"
      />
    </svg>
  );
};

export default DashboardIcon;
