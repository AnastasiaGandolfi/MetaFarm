import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsWhatsapp,
  BsLink,
  BsFlagFill,
} from "react-icons/bs";
import { FaShare, FaTelegramPlane } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SlOptions } from "react-icons/sl";
import { TbRefresh } from "react-icons/tb";
import { IconDropdown } from "./IconDropdown";
import { OptionDropdown } from "./OptionDropdown";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

export function IconSocialAndOption() {
  const shareUrl = "https://metafarm.me/";
  return (
    <div className="css-8g204a">
      <div className="css-nrqnxi">
        <div className="css-nrqnxi">
          <a href="/signup">
            <button className="css-g9ogwi">
              <svg width="24px" height="23px" viewBox="0 0 24 23" fill="none">
                <path
                  d="M16.0807 1.25017L16.0735 2.25017H16.0807V1.25017ZM12.0276 2.6177L11.4191 3.4113L12.0266 3.87701L12.6347 3.41226L12.0276 2.6177ZM11.7117 2.41873L11.191 3.27243L11.1973 3.27626L11.2036 3.27999L11.7117 2.41873ZM11.259 2.11343L11.7296 1.23107L11.6991 1.21476L11.6674 1.20061L11.259 2.11343ZM10.859 1.93446L10.3771 2.81067L10.4131 2.83049L10.4506 2.84728L10.859 1.93446ZM10.1958 1.65969L9.50702 2.38469L9.67254 2.54193L9.8899 2.61176L10.1958 1.65969ZM10.101 1.59758L10.5301 0.6943L10.3265 0.597577H10.101V1.59758ZM10.0389 1.59758L9.71692 2.54432L9.87351 2.59758H10.0389V1.59758ZM8.11131 1.25017L8.14146 0.250623L8.12639 0.250168H8.11131V1.25017ZM7.1112 1.31333V2.31333H7.18377L7.25558 2.30286L7.1112 1.31333ZM6.98487 1.31333V0.313333H6.92014L6.85595 0.321678L6.98487 1.31333ZM6.04897 1.53336L6.36 2.48376L6.3675 2.48131L6.37496 2.47873L6.04897 1.53336ZM1.91059 10.8092L0.957949 11.1133L0.962672 11.1281L0.967852 11.1427L1.91059 10.8092ZM5.08043 15.8613L4.37097 16.5661L4.37849 16.5737L4.38618 16.5811L5.08043 15.8613ZM11.7854 21.083L11.2583 21.9328L11.259 21.9332L11.7854 21.083ZM12.0591 21.2525L11.5327 22.1027L12.0526 22.4247L12.5762 22.1085L12.0591 21.2525ZM12.3223 21.0935L12.8393 21.9495L12.8465 21.9452L12.8535 21.9408L12.3223 21.0935ZM18.9873 15.8719L19.683 16.5902L19.6888 16.5847L19.6944 16.579L18.9873 15.8719ZM22.1551 10.8092L23.0994 11.1381L23.1045 11.1234L23.1092 11.1086L22.1551 10.8092ZM18.3569 0.607419C17.6104 0.356909 16.838 0.250168 16.0807 0.250168V2.25017C16.6519 2.25017 17.206 2.33082 17.7207 2.50352L18.3569 0.607419ZM16.0879 0.250194C14.3976 0.238034 12.7623 0.797686 11.4204 1.82314L12.6347 3.41226C13.6321 2.65013 14.8371 2.24125 16.0735 2.25014L16.0879 0.250194ZM12.636 1.82409C12.479 1.70371 12.2869 1.59702 12.2199 1.55746L11.2036 3.27999C11.3471 3.36465 11.3867 3.3864 11.4191 3.4113L12.636 1.82409ZM12.2325 1.56502C12.2396 1.56933 12.2332 1.56575 12.2004 1.54232C12.1611 1.51417 12.146 1.50272 12.0893 1.46192C12.0093 1.40441 11.874 1.30809 11.7296 1.23107L10.7885 2.99578C10.7884 2.99574 10.792 2.99767 10.7997 3.00235C10.8073 3.00696 10.8171 3.01321 10.8296 3.02145C10.8552 3.03843 10.8848 3.05921 10.921 3.08524C10.9446 3.1022 11.0065 3.14727 11.0372 3.16922C11.0745 3.1959 11.1313 3.23601 11.191 3.27243L12.2325 1.56502ZM11.6674 1.20061L11.2674 1.02164L10.4506 2.84728L10.8507 3.02624L11.6674 1.20061ZM11.3409 1.05824C11.0525 0.899596 10.7659 0.792507 10.5016 0.707616L9.8899 2.61176C10.091 2.67636 10.2444 2.73772 10.3771 2.81067L11.3409 1.05824ZM10.8845 0.93469C10.7741 0.829805 10.6503 0.751419 10.5301 0.6943L9.67196 2.50085C9.63593 2.48374 9.57531 2.44957 9.50702 2.38469L10.8845 0.93469ZM10.101 0.597577H10.0389V2.59758H10.101V0.597577ZM10.3609 0.650834C9.64377 0.406939 8.90318 0.273595 8.14146 0.250623L8.08117 2.24971C8.64592 2.26675 9.18968 2.36501 9.71692 2.54432L10.3609 0.650834ZM8.11131 0.250168H7.99551V2.25017H8.11131V0.250168ZM7.99551 0.250168C7.65508 0.250168 7.31301 0.273299 6.96682 0.323811L7.25558 2.30286C7.50103 2.26704 7.7464 2.25017 7.99551 2.25017V0.250168ZM7.1112 0.313333H6.98487V2.31333H7.1112V0.313333ZM6.85595 0.321678C6.47304 0.371457 6.09223 0.460657 5.72298 0.587986L6.37496 2.47873C6.6163 2.39551 6.86505 2.33732 7.11378 2.30499L6.85595 0.321678ZM5.73794 0.582958C1.14369 2.08647 -0.348489 7.02054 0.957949 11.1133L2.86323 10.5051C1.79045 7.14432 3.0986 3.55108 6.36 2.48376L5.73794 0.582958ZM0.967852 11.1427C1.6907 13.1859 2.85549 15.0404 4.37097 16.5661L5.7899 15.1566C4.484 13.8419 3.478 12.2413 2.85333 10.4756L0.967852 11.1427ZM4.38618 16.5811C6.48858 18.609 8.78794 20.4003 11.2583 21.9328L12.3126 20.2332C9.9634 18.7759 7.77593 17.072 5.77469 15.1416L4.38618 16.5811ZM11.259 21.9332L11.5327 22.1027L12.5856 20.4023L12.3119 20.2328L11.259 21.9332ZM12.5762 22.1085L12.8393 21.9495L11.8053 20.2376L11.5421 20.3965L12.5762 22.1085ZM12.8535 21.9408C15.3139 20.3983 17.5998 18.6076 19.683 16.5902L18.2917 15.1535C16.3091 17.0735 14.1334 18.7779 11.7912 20.2463L12.8535 21.9408ZM19.6944 16.579C21.2226 15.0508 22.3873 13.1829 23.0994 11.1381L21.2107 10.4803C20.5963 12.2443 19.5924 13.8526 18.2802 15.1648L19.6944 16.579ZM23.1092 11.1086C24.391 7.02442 22.9061 2.08638 18.348 0.604465L17.7296 2.50647C20.9429 3.55117 22.2584 7.14044 21.2009 10.5097L23.1092 11.1086Z"
                  fill="white"
                ></path>
              </svg>
            </button>
          </a>
          <div className="css-1nhwfv9">1</div>
        </div>
        <div className="css-2fead">
          <svg width="22px" height="17px" viewBox="0 0 22 17" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.301 9.94091C22.0523 9.01816 22.0523 7.73135 21.301 6.8086C19.4312 4.51186 15.517 0.499756 10.9913 0.499756C6.46557 0.499756 2.55146 4.51187 0.6816 6.8086C-0.0696486 7.73135 -0.0696475 9.01816 0.681601 9.94091C2.55146 12.2376 6.46557 16.2498 10.9913 16.2498C15.517 16.2498 19.4312 12.2376 21.301 9.94091ZM13.9999 7.99976C13.9999 9.65661 12.6567 10.9998 10.9999 10.9998C9.34302 10.9998 7.99987 9.65661 7.99987 7.99976C7.99987 6.3429 9.34302 4.99976 10.9999 4.99976C12.6567 4.99976 13.9999 6.3429 13.9999 7.99976ZM15.9999 7.99976C15.9999 10.7612 13.7613 12.9998 10.9999 12.9998C8.23845 12.9998 5.99987 10.7612 5.99987 7.99976C5.99987 5.23833 8.23845 2.99976 10.9999 2.99976C13.7613 2.99976 15.9999 5.23833 15.9999 7.99976Z"
              fill="white"
            ></path>
          </svg>
          <div className="css-1nhwfv9">50</div>
        </div>
        <div className="css-84wpv7">
          <div className="css-14bjdul">
            <div className="css-95mwbsu">
              <div className="css-1jmocn">
                <div className="css-84wp7">
                  <IconDropdown
                    classe="css-nrqnxi"
                    text="Share"
                    icon={<FaShare />}
                    iconArray={[
                      <FacebookShareButton url={shareUrl}>
                        <FacebookIcon size={20} round={true} />
                        <span className="span-social">Facebook</span>
                      </FacebookShareButton>,
                      <TwitterShareButton url={shareUrl}>
                        <TwitterIcon size={20} round={true} />
                        <span className="span-social">Twitter</span>
                      </TwitterShareButton>,
                      <TelegramShareButton url={shareUrl}>
                        <TelegramIcon size={20} round={true} />
                        <span className="span-social">Telegram</span>
                      </TelegramShareButton>,
                      <WhatsappShareButton url={shareUrl}>
                        <WhatsappIcon size={20} round={true} />
                        <span className="span-social">Whatsapp</span>
                      </WhatsappShareButton>,
                      <EmailShareButton url={shareUrl}>
                        <EmailIcon size={20} round={true} />
                        <span className="span-social">Email</span>
                      </EmailShareButton>,
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="css-fb99im">
        <div className="css-14bjdul">
          <div className="css-95mwbsu">
            <OptionDropdown
              classe="css-84wpv7"
              icon={<SlOptions />}
              iconArray={[<TbRefresh />, <BsFlagFill />]}
              shareTextArray={["Refresh Metadata", "Report"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
