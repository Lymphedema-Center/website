import React from "react";
import { filterProps } from "../../helpers";

interface LymphedemaCenterLogoProps extends React.SVGAttributes<SVGSVGElement> {
  /** Use EITHER height or width. The other will be computed to maintain aspect ratio. */
  height?: string;
  /** Use EITHER height or width. The other will be computed to maintain aspect ration. */
  width?: string;
}

const LymphedemaCenterLogo = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    {...filterProps(props, ["height", "width"])}
    width="1049"
    height="371"
    viewBox="0 0 1049 371"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M379.077 307.776C376.485 317.952 371.445 325.44 363.957 330.24C356.565 335.04 347.349 337.44 336.309 337.44C326.517 337.44 318.021 335.52 310.821 331.68C303.717 327.84 298.245 322.224 294.405 314.832C290.565 307.44 288.645 298.656 288.645 288.48C288.645 278.304 290.565 269.568 294.405 262.272C298.245 254.88 303.717 249.264 310.821 245.424C317.925 241.488 326.373 239.52 336.165 239.52C346.917 239.52 356.085 241.824 363.669 246.432C371.253 250.944 376.101 257.808 378.213 267.024L352.725 277.248C351.669 271.392 349.941 267.408 347.541 265.296C345.141 263.088 341.637 261.984 337.029 261.984C331.173 261.984 326.661 264.192 323.493 268.608C320.421 273.024 318.885 279.648 318.885 288.48C318.885 306.144 324.837 314.976 336.741 314.976C341.541 314.976 345.189 313.872 347.685 311.664C350.277 309.36 352.005 305.712 352.869 300.72L379.077 307.776Z"
      fill="#FFD3B3"
    />
    <path
      d="M461.259 298.272C461.259 301.728 461.019 304.512 460.539 306.624H413.163C413.739 310.656 415.035 313.488 417.051 315.12C419.067 316.752 421.899 317.568 425.547 317.568C431.403 317.568 435.003 315.264 436.347 310.656L459.819 317.424C457.995 323.952 454.011 328.944 447.867 332.4C441.819 335.76 434.379 337.44 425.547 337.44C412.491 337.44 402.507 334.224 395.595 327.792C388.683 321.264 385.227 312 385.227 300C385.227 288.096 388.587 278.88 395.307 272.352C402.123 265.824 411.675 262.56 423.963 262.56C435.963 262.56 445.179 265.776 451.611 272.208C458.043 278.544 461.259 287.232 461.259 298.272ZM424.107 282.288C420.939 282.288 418.443 283.2 416.619 285.024C414.891 286.848 413.739 289.824 413.163 293.952H434.043C433.563 290.016 432.507 287.088 430.875 285.168C429.339 283.248 427.083 282.288 424.107 282.288Z"
      fill="#FFD3B3"
    />
    <path
      d="M523.9 262.56C531.292 262.56 537.052 264.72 541.18 269.04C545.404 273.36 547.516 279.456 547.516 287.328V336H518.428V295.104C518.428 291.168 517.804 288.384 516.556 286.752C515.308 285.12 513.484 284.304 511.084 284.304C508.012 284.304 505.612 285.456 503.884 287.76C502.156 289.968 501.292 293.424 501.292 298.128V336H472.204V264H498.412L499.132 278.832C501.244 273.552 504.412 269.52 508.636 266.736C512.86 263.952 517.948 262.56 523.9 262.56Z"
      fill="#FFD3B3"
    />
    <path
      d="M616.657 332.256C614.353 333.792 611.233 335.04 607.297 336C603.361 336.96 599.521 337.44 595.777 337.44C586.177 337.44 578.977 335.52 574.177 331.68C569.377 327.84 566.977 321.6 566.977 312.96V284.016H555.313V264H566.977V248.304L596.065 240.24V264H615.793V284.016H596.065V308.352C596.065 311.712 596.785 314.112 598.225 315.552C599.761 316.992 602.065 317.712 605.137 317.712C608.785 317.712 612.001 316.896 614.785 315.264L616.657 332.256Z"
      fill="#FFD3B3"
    />
    <path
      d="M697.791 298.272C697.791 301.728 697.551 304.512 697.071 306.624H649.695C650.271 310.656 651.567 313.488 653.583 315.12C655.599 316.752 658.431 317.568 662.079 317.568C667.935 317.568 671.535 315.264 672.879 310.656L696.351 317.424C694.527 323.952 690.543 328.944 684.399 332.4C678.351 335.76 670.911 337.44 662.079 337.44C649.023 337.44 639.039 334.224 632.127 327.792C625.215 321.264 621.759 312 621.759 300C621.759 288.096 625.119 278.88 631.839 272.352C638.655 265.824 648.207 262.56 660.495 262.56C672.495 262.56 681.711 265.776 688.143 272.208C694.575 278.544 697.791 287.232 697.791 298.272ZM660.639 282.288C657.471 282.288 654.975 283.2 653.151 285.024C651.423 286.848 650.271 289.824 649.695 293.952H670.575C670.095 290.016 669.039 287.088 667.407 285.168C665.871 283.248 663.615 282.288 660.639 282.288Z"
      fill="#FFD3B3"
    />
    <path
      d="M757.12 262.56C760.48 262.56 763.024 263.136 764.752 264.288L762.016 288.336C761.152 287.664 759.904 287.136 758.272 286.752C756.64 286.368 754.864 286.176 752.944 286.176C748.432 286.176 744.784 287.424 742 289.92C739.216 292.32 737.824 295.872 737.824 300.576V336H708.736V264H734.8L735.664 280.848C737.392 274.992 740.032 270.48 743.584 267.312C747.136 264.144 751.648 262.56 757.12 262.56Z"
      fill="#FFD3B3"
    />
    <path
      d="M233.223 162.68C230.247 171.416 226.983 178.328 223.431 183.416C219.879 188.504 215.655 192.2 210.759 194.504C205.863 196.808 199.911 197.96 192.903 197.96C184.263 197.96 177.255 196.28 171.879 192.92L177.495 174.2C179.031 175.256 180.711 176.024 182.535 176.504C184.455 176.984 186.999 177.224 190.167 177.224C193.143 177.224 195.447 176.84 197.079 176.072C198.711 175.304 199.911 173.912 200.679 171.896L201.687 169.16L192.903 148.712L171.879 95H203.847L212.487 134.024L215.511 150.008L218.967 133.592L228.039 95H256.695L233.223 162.68Z"
      fill="#FFD3B3"
    />
    <path
      d="M360.521 93.56C367.721 93.56 373.433 95.72 377.657 100.04C381.881 104.36 383.993 110.456 383.993 118.328V167H354.905V125.528C354.905 121.88 354.281 119.288 353.033 117.752C351.881 116.12 350.105 115.304 347.705 115.304C344.633 115.304 342.233 116.456 340.505 118.76C338.873 121.064 338.057 124.472 338.057 128.984V167H308.969V125.528C308.969 121.88 308.345 119.288 307.097 117.752C305.945 116.12 304.169 115.304 301.769 115.304C298.793 115.304 296.441 116.456 294.713 118.76C292.985 121.064 292.121 124.52 292.121 129.128V167H263.033V95H289.241L289.961 109.832C292.169 104.552 295.337 100.52 299.465 97.736C303.689 94.952 308.729 93.56 314.585 93.56C320.057 93.56 324.665 94.808 328.409 97.304C332.249 99.8 334.985 103.4 336.617 108.104C338.825 103.4 341.993 99.8 346.121 97.304C350.249 94.808 355.049 93.56 360.521 93.56Z"
      fill="#FFD3B3"
    />
    <path
      d="M448.148 93.56C457.172 93.56 464.132 96.824 469.028 103.352C474.02 109.784 476.516 118.904 476.516 130.712C476.516 142.616 474.02 151.88 469.028 158.504C464.036 165.128 457.028 168.44 448.004 168.44C443.012 168.44 438.74 167.24 435.188 164.84C431.636 162.44 428.9 159.128 426.98 154.904V197.24H397.892V95H423.38L424.244 110.984C426.164 105.608 429.188 101.384 433.316 98.312C437.444 95.144 442.388 93.56 448.148 93.56ZM436.916 147.56C440.372 147.56 442.964 146.312 444.692 143.816C446.42 141.224 447.284 136.952 447.284 131C447.284 125.048 446.372 120.776 444.548 118.184C442.82 115.592 440.276 114.296 436.916 114.296C430.58 114.296 427.268 119.336 426.98 129.416V132.584C427.268 142.568 430.58 147.56 436.916 147.56Z"
      fill="#FFD3B3"
    />
    <path
      d="M540.01 93.56C547.402 93.56 553.162 95.72 557.29 100.04C561.514 104.36 563.626 110.456 563.626 118.328V167H534.538V126.104C534.538 122.168 533.914 119.384 532.666 117.752C531.418 116.12 529.594 115.304 527.194 115.304C524.218 115.304 521.818 116.456 519.994 118.76C518.266 121.064 517.402 124.52 517.402 129.128V167H488.314V65.336H517.402V108.968C519.514 103.88 522.49 100.04 526.33 97.448C530.17 94.856 534.73 93.56 540.01 93.56Z"
      fill="#FFD3B3"
    />
    <path
      d="M650.619 129.272C650.619 132.728 650.379 135.512 649.899 137.624H602.523C603.099 141.656 604.395 144.488 606.411 146.12C608.427 147.752 611.259 148.568 614.907 148.568C620.763 148.568 624.363 146.264 625.707 141.656L649.179 148.424C647.355 154.952 643.371 159.944 637.227 163.4C631.179 166.76 623.739 168.44 614.907 168.44C601.851 168.44 591.867 165.224 584.955 158.792C578.043 152.264 574.587 143 574.587 131C574.587 119.096 577.947 109.88 584.667 103.352C591.483 96.824 601.035 93.56 613.323 93.56C625.323 93.56 634.539 96.776 640.971 103.208C647.403 109.544 650.619 118.232 650.619 129.272ZM613.467 113.288C610.299 113.288 607.803 114.2 605.979 116.024C604.251 117.848 603.099 120.824 602.523 124.952H623.403C622.923 121.016 621.867 118.088 620.235 116.168C618.699 114.248 616.443 113.288 613.467 113.288Z"
      fill="#FFD3B3"
    />
    <path
      d="M737.74 65.336V167H711.676L710.668 153.032C708.556 157.736 705.532 161.48 701.596 164.264C697.66 167.048 693.004 168.44 687.628 168.44C678.604 168.44 671.596 165.176 666.604 158.648C661.612 152.12 659.116 143 659.116 131.288C659.116 119.384 661.612 110.12 666.604 103.496C671.692 96.872 678.748 93.56 687.772 93.56C692.764 93.56 696.988 94.76 700.444 97.16C703.996 99.56 706.732 102.92 708.652 107.24V65.336H737.74ZM698.716 147.704C705.34 147.704 708.652 142.328 708.652 131.576V130.424C708.652 119.768 705.34 114.44 698.716 114.44C695.356 114.44 692.812 115.736 691.084 118.328C689.356 120.824 688.492 125.048 688.492 131C688.492 136.952 689.356 141.224 691.084 143.816C692.812 146.408 695.356 147.704 698.716 147.704Z"
      fill="#FFD3B3"
    />
    <path
      d="M824.994 129.272C824.994 132.728 824.754 135.512 824.274 137.624H776.898C777.474 141.656 778.77 144.488 780.786 146.12C782.802 147.752 785.634 148.568 789.282 148.568C795.138 148.568 798.738 146.264 800.082 141.656L823.554 148.424C821.73 154.952 817.746 159.944 811.602 163.4C805.554 166.76 798.114 168.44 789.282 168.44C776.226 168.44 766.242 165.224 759.33 158.792C752.418 152.264 748.962 143 748.962 131C748.962 119.096 752.322 109.88 759.042 103.352C765.858 96.824 775.41 93.56 787.698 93.56C799.698 93.56 808.914 96.776 815.346 103.208C821.778 109.544 824.994 118.232 824.994 129.272ZM787.842 113.288C784.674 113.288 782.178 114.2 780.354 116.024C778.626 117.848 777.474 120.824 776.898 124.952H797.778C797.298 121.016 796.242 118.088 794.61 116.168C793.074 114.248 790.818 113.288 787.842 113.288Z"
      fill="#FFD3B3"
    />
    <path
      d="M933.427 93.56C940.627 93.56 946.339 95.72 950.563 100.04C954.787 104.36 956.899 110.456 956.899 118.328V167H927.811V125.528C927.811 121.88 927.187 119.288 925.939 117.752C924.787 116.12 923.011 115.304 920.611 115.304C917.539 115.304 915.139 116.456 913.411 118.76C911.779 121.064 910.963 124.472 910.963 128.984V167H881.875V125.528C881.875 121.88 881.251 119.288 880.003 117.752C878.851 116.12 877.075 115.304 874.675 115.304C871.699 115.304 869.347 116.456 867.619 118.76C865.891 121.064 865.027 124.52 865.027 129.128V167H835.939V95H862.147L862.867 109.832C865.075 104.552 868.243 100.52 872.371 97.736C876.595 94.952 881.635 93.56 887.491 93.56C892.963 93.56 897.571 94.808 901.315 97.304C905.155 99.8 907.891 103.4 909.523 108.104C911.731 103.4 914.899 99.8 919.027 97.304C923.155 94.808 927.955 93.56 933.427 93.56Z"
      fill="#FFD3B3"
    />
    <path
      d="M1044.24 151.016C1045.87 151.016 1047.21 150.824 1048.27 150.44L1045.97 165.848C1042.8 167.576 1039.39 168.44 1035.74 168.44C1030.27 168.44 1025.71 167.48 1022.06 165.56C1018.51 163.544 1016.16 160.616 1015.01 156.776C1012.89 160.424 1009.68 163.304 1005.36 165.416C1001.13 167.432 995.806 168.44 989.374 168.44C982.078 168.44 976.51 166.952 972.67 163.976C968.926 160.904 967.054 156.536 967.054 150.872C967.054 144.824 969.214 139.928 973.534 136.184C977.854 132.44 985.054 129.56 995.134 127.544L1010.4 124.376V121.64C1010.4 118.856 1009.68 116.696 1008.24 115.16C1006.8 113.624 1004.78 112.856 1002.19 112.856C999.31 112.856 996.958 113.624 995.134 115.16C993.31 116.6 992.206 119.144 991.822 122.792L967.918 117.752C968.974 110.072 972.43 104.12 978.286 99.896C984.238 95.672 992.542 93.56 1003.2 93.56C1027.2 93.56 1039.2 103.112 1039.2 122.216V145.256C1039.2 149.096 1040.88 151.016 1044.24 151.016ZM1001.04 151.448C1003.53 151.448 1005.69 150.728 1007.52 149.288C1009.44 147.752 1010.4 145.64 1010.4 142.952V136.328L1002.48 138.344C997.486 139.592 994.99 142.088 994.99 145.832C994.99 147.656 995.518 149.048 996.574 150.008C997.726 150.968 999.214 151.448 1001.04 151.448Z"
      fill="#FFD3B3"
    />
    <path
      d="M160.467 124.5H157.7C160.757 124.5 163.233 122.024 163.233 118.967V116.2C163.233 113.143 160.757 110.667 157.7 110.667H134.967L133.054 109.054C130.166 106.614 126.229 105.817 122.618 106.942L114.571 109.452C112.005 110.252 109.674 111.662 107.773 113.56L102.367 118.967H96.8333V157.7H103.288C104.486 157.7 105.651 158.088 106.609 158.806L107.346 159.36C113.096 163.671 120.087 166 127.269 166H152.167C155.224 166 157.7 163.524 157.7 160.467V157.7C157.7 154.643 155.224 152.167 152.167 152.167H157.7C160.757 152.167 163.233 149.69 163.233 146.633V143.867C163.233 140.81 160.757 138.333 157.7 138.333H160.467C163.524 138.333 166 135.857 166 132.8V130.033C166 126.976 163.524 124.5 160.467 124.5Z"
      fill="#FFD3B3"
    />
    <path
      d="M47.0333 116.2V83H2.76666L2.76666 132.8C2.76666 148.08 15.1532 160.467 30.4333 160.467H124.5V116.2H47.0333Z"
      fill="#FFD3B3"
    />
    <path
      d="M24.9 83H55.3334V24.9C55.3334 14.6074 46.3417 0 35.9667 0L24.9 0L24.9 83Z"
      fill="#75AA40"
    />
    <path
      d="M24.9 0C11.1464 0 0 11.1464 0 24.9L0 83H49.8L49.8 24.9C49.8 11.1464 38.6536 0 24.9 0Z"
      fill="#98CA69"
    />
    <path d="M0 71.9333H49.8V83H0L0 71.9333Z" fill="#6E83B7" />
    <path
      d="M2.76667 99.6H47.0333C48.5599 99.6 49.8 100.84 49.8 102.367V113.433L0 138.333L0 102.367C0 100.84 1.24014 99.6 2.76667 99.6Z"
      fill="#EDEFF1"
    />
    <path
      d="M49.8 113.433H66.4L33.2 163.233H22.1333C9.91029 163.233 0 153.323 0 141.1L0 138.333L49.8 113.433Z"
      fill="#EDEFF1"
    />
    <path
      d="M49.8 110.667L0 138.333L0 141.1L49.8 113.433V110.667Z"
      fill="#D3D3D3"
    />
    <path
      d="M66.4 113.433H83V163.233H60.8667L55.3333 130.033L66.4 113.433Z"
      fill="#EDEFF1"
    />
    <path
      d="M69.1667 113.433L55.3333 135.567V130.033L66.4 113.433H69.1667Z"
      fill="#D3D3D3"
    />
    <path
      d="M55.3333 130.033L33.2 163.233H60.8667L55.3333 130.033Z"
      fill="#EDEFF1"
    />
    <path
      d="M55.3333 130.033L33.2 163.233H35.9667L55.8872 133.354L55.3333 130.033Z"
      fill="#D3D3D3"
    />
    <path
      d="M55.3333 130.033L53.1205 133.354L58.1 163.233H60.8667L55.3333 130.033Z"
      fill="#D3D3D3"
    />
    <path
      d="M102.367 163.233H83V113.433H102.367C103.893 113.433 105.133 114.673 105.133 116.2V160.467C105.133 161.993 103.893 163.233 102.367 163.233Z"
      fill="#EDEFF1"
    />
    <path d="M83 113.433H85.7667V163.233H83V113.433Z" fill="#D3D3D3" />
    <path
      d="M162.486 121.733C161.518 123.394 159.748 124.5 157.7 124.5H146.633V121.733H162.486Z"
      fill="#FCB98B"
    />
    <path
      d="M165.253 135.567C164.284 137.227 162.515 138.333 160.467 138.333H146.633V135.567H165.253Z"
      fill="#FCB98B"
    />
    <path
      d="M162.486 149.4C161.518 151.06 159.748 152.167 157.7 152.167H146.633V149.4H162.486Z"
      fill="#FCB98B"
    />
  </svg>
);

export default LymphedemaCenterLogo;
