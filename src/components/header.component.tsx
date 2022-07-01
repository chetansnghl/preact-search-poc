/** @jsx h */
import { h, JSX } from 'preact'
import { Link } from 'preact-router/match';
import * as style from '../less/header.module.less'

export default function HeaderComponent(): JSX.Element {
  return (
    <header className={`${style['header']} full-bleed`}>
        <div className="wrapper">
          <Link activeClassName="active" href="/">
            <svg width="35" height="24" viewBox="0 0 35 24" fill="none" class="tailfin" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.1622 0H19.94C15.5433 0 14.4699 0.722464 12.7154 2.64215L0 16.5754C10.1558 16.1006 13.2727 26.3183 23.5936 23.511L34.1622 0Z" fill="#EB143A" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5433 5.44943C15.5433 5.44943 16.1832 4.27285 16.6786 3.9013C16.6786 3.9013 17.2153 3.57103 17.2359 3.03434C17.2359 3.03434 17.2772 2.66279 16.9882 2.43573C16.9882 2.43573 16.2245 1.81647 15.5846 2.86921C15.5846 2.86921 12.6328 8.4425 11.6213 14.0777C11.6213 14.0777 11.5388 14.2635 11.5181 13.7474C11.5181 13.7474 11.0847 9.02047 11.064 8.85533C11.0615 8.83504 11.0596 8.8107 11.0574 8.78358C11.0422 8.58991 11.0158 8.25419 10.6718 8.23608C10.6718 8.23608 10.1971 8.15351 9.92872 8.85533L8.62828 12.0755C8.62828 12.0755 8.42187 12.4883 8.75214 12.6328C8.75214 12.6328 9.14433 12.8598 9.39203 12.3025L9.99064 11.0021C10.1145 10.7337 10.1971 10.775 10.1971 10.775C10.259 10.7957 10.3003 11.0434 10.3003 11.0434C10.3003 11.0434 10.837 17.3804 10.837 17.4217C10.837 17.463 10.8989 17.979 11.3117 17.979C11.6213 17.979 11.7246 17.6281 11.7865 17.3391C11.7925 17.3109 11.8035 17.2567 11.8192 17.1789L11.8193 17.1788L11.8193 17.1788L11.8193 17.1786L11.8193 17.1785C11.965 16.4586 12.5192 13.7195 13.3759 10.7957C14.0158 8.66956 14.8208 6.54345 15.5433 5.44943ZM14.6763 10.9608C14.0777 11.1053 13.9951 11.7865 13.9951 11.7865L13.6236 14.5525C13.5617 15.1098 14.2841 14.697 14.2841 14.697C14.5731 14.5319 14.635 14.1603 14.635 14.1603L14.7382 13.4585L15.0892 11.6007C15.1717 10.837 14.6763 10.9608 14.6763 10.9608ZM15.6465 12.9631C15.6672 12.6535 15.8736 11.2085 15.8736 11.2085C15.9514 10.3715 16.378 10.3055 16.4091 10.3007C16.411 10.3004 16.4114 10.3003 16.4103 10.3003C16.4722 10.2797 16.8644 10.2384 16.8644 10.2384C16.8644 10.2384 17.0295 10.2177 17.3185 10.0939C17.7107 9.92875 17.8345 10.2384 17.8345 10.2384C18.041 10.6512 17.3804 10.9402 17.3804 10.9402C16.7818 11.2705 16.7405 12.0342 16.7405 12.0342L16.6373 13.0663C16.5548 13.8094 16.0387 13.9539 16.0387 13.9539C15.3782 14.181 15.6465 12.9631 15.6465 12.9631ZM15.3782 9.57783C15.7704 9.24756 15.6671 8.99986 15.6671 8.99986C15.5227 8.56638 14.9653 9.0205 14.9653 9.0205C14.5112 9.35077 14.6763 9.6604 14.6763 9.6604C14.8621 10.0113 15.3782 9.57783 15.3782 9.57783ZM22.6647 10.8782C22.5615 11.4768 22.0455 11.5801 22.0455 11.5801C21.5707 11.7039 21.6739 11.2291 21.6739 11.2498L21.7359 10.8163L22.1281 8.64892C22.2313 8.15351 22.7267 8.05031 22.7267 8.05031C23.1395 7.9471 23.0156 8.52507 22.995 8.60763C22.9744 8.66956 22.6647 10.8782 22.6647 10.8782ZM23.2839 6.97696C23.2839 6.97696 23.7174 6.62605 23.511 6.35771C23.511 6.35771 23.3252 6.08936 22.8092 6.44027C22.8092 6.44027 22.3551 6.81183 22.6234 7.08017C22.6261 7.08017 22.6328 7.08426 22.6433 7.09064C22.7147 7.13393 22.9601 7.28279 23.2839 6.97696ZM27.8871 9.5572C28.3619 9.35079 28.6302 9.47464 28.7334 9.66041C28.8366 9.84619 28.7953 10.032 28.6715 10.0526C28.527 10.2797 28.011 10.4448 27.6188 10.5687C27.3298 10.6512 27.1027 10.7338 27.1027 10.7338C26.4215 10.9402 25.5959 11.2705 25.5959 11.2705C23.6968 12.0755 22.0042 12.9631 20.5386 13.8301C20.5331 13.8909 20.5276 13.9473 20.5224 13.9997C20.5084 14.1427 20.4973 14.2554 20.4973 14.3461C20.4973 14.3461 20.229 17.4837 20.1877 17.9378C20.1877 17.9378 20.1671 18.4951 20.2496 18.846C20.2563 18.8743 20.2639 18.905 20.272 18.9377C20.3642 19.3107 20.521 19.9444 20.0845 20.229C19.6923 20.4767 19.362 20.1877 19.2795 20.0845C19.2778 20.082 19.2759 20.0792 19.2738 20.0763C19.2266 20.0077 19.098 19.8207 19.1969 18.9699C19.1969 18.9699 19.424 16.7199 19.4859 15.9975L19.6097 14.3874C15.7704 16.7612 13.6855 18.9079 13.6855 18.9079C13.4791 19.0937 12.9631 19.5272 12.5915 19.0524C12.2406 18.5983 13.1695 17.9171 13.1695 17.9171C15.1924 16.1832 17.5456 14.6557 19.6717 13.4379L19.7129 12.9425C19.7129 12.9425 19.7336 12.798 19.5684 12.9012C19.5684 12.9012 18.846 13.3347 18.3299 13.087C18.3299 13.087 17.8965 12.9012 17.9171 12.2819C17.9171 12.2819 17.9171 10.321 18.7428 9.51592C18.7428 9.51592 19.2175 9.02052 19.6717 9.04116C19.9606 9.04116 19.9194 9.45399 19.5478 9.76362C19.218 10.0568 19.1322 10.3987 19.0304 10.8038C19.0175 10.8551 19.0044 10.9075 18.9905 10.9608C18.9905 10.9608 18.7015 12.3026 19.1969 12.2406C19.1969 12.2406 19.7129 12.2819 19.8574 11.4356C19.8574 11.4356 20.1877 9.59849 20.229 9.37143C20.2496 9.14437 20.3116 8.62832 20.7657 8.64896C20.7657 8.64896 21.2198 8.64896 21.1785 9.02052C21.1785 9.02052 20.8482 11.3118 20.6418 12.9425C23.5317 11.3324 25.7816 10.3829 25.7816 10.3829C25.8642 10.3416 25.8229 10.321 25.8229 10.321C25.472 10.1971 25.6371 9.43335 25.6371 9.43335L25.8023 7.88522C25.8229 7.49302 25.3482 7.72008 25.3482 7.72008C25.0179 7.90586 24.7908 8.33934 24.7908 8.33934C24.6051 8.60768 24.4812 9.97004 24.4812 9.97004C24.4399 10.6512 24.0271 10.7751 24.0271 10.7751C23.5523 10.9402 23.4904 10.6719 23.4904 10.6719C23.4491 10.548 23.5523 9.88747 23.5523 9.88747L23.7587 8.19484C23.8 7.49302 24.3161 7.34853 24.3161 7.34853C24.4193 7.30725 24.5844 7.2866 24.7495 7.34853C24.9147 7.41045 25.0385 7.38981 25.1417 7.36917C25.3275 7.32789 25.5546 7.12147 25.5546 7.12147C26.0293 6.70863 26.3183 6.74992 26.3183 6.74992C26.8757 6.74992 26.7931 7.45174 26.7931 7.45174L26.6073 9.37143C26.5511 10.1027 27.0398 9.91424 27.1453 9.87354C27.156 9.86943 27.1627 9.86683 27.1646 9.86683C27.1853 9.86683 27.3917 9.78426 27.8871 9.5572Z" fill="white" />
            </svg>
          </Link>
        </div>
    </header>
  )
}