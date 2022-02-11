// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled from 'styled-components';

import Svg from './svg';

const MattermostLogo = (props: {className?: string}) => (
    <Svg
        width='106'
        height='25'
        viewBox='0 0 106 25'
        fill='none'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M19.756 7.98874C20.1636 7.9344 20.562 7.90723 20.9334 7.90723C21.3319 7.90723 21.7303 7.9344 22.1198 7.98874L24.6556 13.2416L27.2639 7.98874C27.5809 7.9344 27.9341 7.90723 28.3236 7.90723C28.713 7.90723 29.0843 7.9344 29.4466 7.98874L29.9719 17.6431C29.5824 17.6974 29.2111 17.7246 28.867 17.7246C28.5228 17.7246 28.1786 17.6974 27.8345 17.6431L27.5537 10.6604L25.3168 15.4876C25.1719 15.5057 25.027 15.5238 24.873 15.5419C24.719 15.5601 24.5651 15.5601 24.4111 15.5601C24.2753 15.5601 24.1485 15.551 24.0126 15.5419C23.8768 15.5329 23.7409 15.5148 23.596 15.4876L21.513 10.5608L21.2866 17.6431C20.9605 17.6974 20.6436 17.7246 20.3356 17.7246C20.0096 17.7246 19.6745 17.6974 19.3213 17.6431L19.756 7.98874ZM86.5485 11.7653H85.6247L85.5522 11.4846L88.2058 8.09742H88.5319V10.2348H90.2436C90.2707 10.3797 90.2888 10.5065 90.2979 10.6152C90.307 10.7329 90.316 10.8506 90.316 10.9684C90.316 11.1042 90.307 11.231 90.2979 11.3487C90.2888 11.4755 90.2707 11.6114 90.2436 11.7563H88.5319V14.6363C88.5319 14.9261 88.559 15.1616 88.6043 15.3427C88.6496 15.5238 88.722 15.6597 88.8126 15.7684C88.9032 15.868 89.0119 15.9404 89.1477 15.9767C89.2836 16.0129 89.4375 16.031 89.6187 16.031C89.7636 16.031 89.8994 16.0219 90.0352 15.9948C90.1711 15.9676 90.2888 15.9495 90.3975 15.9314C90.4609 16.1125 90.5153 16.2936 90.5424 16.4929C90.5696 16.6831 90.5877 16.8552 90.5877 17.0091C90.5877 17.1087 90.5877 17.1993 90.5786 17.2718C90.5696 17.3442 90.5696 17.4076 90.5605 17.4801C90.1258 17.5797 89.673 17.634 89.2111 17.634C88.3507 17.634 87.6987 17.4348 87.2458 17.0363C86.793 16.6378 86.5666 15.9767 86.5666 15.071V11.7653H86.5485ZM81.6488 14.3736C81.1236 14.2197 80.707 14.0023 80.4081 13.7035C80.1092 13.4046 79.9643 12.9608 79.9643 12.3631C79.9643 11.6476 80.2179 11.0861 80.7341 10.6785C81.2504 10.271 81.9477 10.0718 82.8353 10.0718C83.2066 10.0718 83.5688 10.108 83.922 10.1714C84.2843 10.2348 84.6466 10.3344 85.0088 10.4702C84.9907 10.7148 84.9454 10.9684 84.8639 11.231C84.7915 11.4936 84.7009 11.7291 84.5922 11.9284C84.3658 11.8378 84.1122 11.7472 83.8405 11.6838C83.5688 11.6114 83.279 11.5752 82.9802 11.5752C82.6632 11.5752 82.4096 11.6204 82.2285 11.7201C82.0473 11.8197 81.9568 11.9736 81.9568 12.191C81.9568 12.3993 82.0202 12.5442 82.1469 12.6348C82.2737 12.7163 82.4549 12.7978 82.6903 12.8793L83.4964 13.1238C83.759 13.1963 84.0036 13.2868 84.2119 13.3955C84.4202 13.5042 84.6103 13.6401 84.7552 13.8031C84.9092 13.9661 85.027 14.1653 85.1085 14.4008C85.19 14.6363 85.2353 14.9261 85.2353 15.2612C85.2353 15.6144 85.1628 15.9404 85.0179 16.2393C84.873 16.5382 84.6556 16.8008 84.3839 17.0272C84.1032 17.2536 83.7681 17.4257 83.3696 17.5525C82.9711 17.6793 82.5273 17.7427 82.0202 17.7427C81.7937 17.7427 81.5854 17.7336 81.3953 17.7246C81.2051 17.7065 81.0239 17.6884 80.8519 17.6521C80.6798 17.6159 80.5077 17.5797 80.3356 17.5344C80.1636 17.4891 79.9824 17.4257 79.7832 17.3533C79.8013 17.0997 79.8466 16.837 79.919 16.5835C79.9915 16.3208 80.082 16.0672 80.1998 15.8227C80.5077 15.9495 80.8066 16.0401 81.0873 16.1035C81.3681 16.1668 81.6579 16.194 81.9568 16.194C82.0926 16.194 82.2375 16.185 82.3915 16.1578C82.5454 16.1306 82.6903 16.0944 82.8262 16.031C82.962 15.9676 83.0707 15.8861 83.1613 15.7865C83.2519 15.6868 83.2971 15.5601 83.2971 15.397C83.2971 15.1706 83.2247 15.0076 83.0888 14.908C82.953 14.8084 82.7628 14.7178 82.5183 14.6453L81.6488 14.3736ZM75.5356 17.7246C74.9379 17.7246 74.4217 17.625 73.987 17.4348C73.5432 17.2446 73.1809 16.9729 72.9002 16.6287C72.6104 16.2846 72.393 15.877 72.2481 15.4152C72.1032 14.9533 72.0307 14.4552 72.0307 13.9118C72.0307 13.3774 72.1032 12.8702 72.2481 12.3993C72.393 11.9284 72.6104 11.5208 72.9002 11.1767C73.19 10.8325 73.5522 10.5608 73.987 10.3616C74.4217 10.1623 74.947 10.0627 75.5356 10.0627C76.1334 10.0627 76.6496 10.1623 77.0934 10.3616C77.5371 10.5608 77.9085 10.8325 78.1983 11.1767C78.4881 11.5208 78.7054 11.9284 78.8503 12.3993C78.9953 12.8702 79.0587 13.3774 79.0587 13.9118C79.0587 14.4461 78.9862 14.9533 78.8503 15.4152C78.7054 15.877 78.4881 16.2846 78.1983 16.6287C77.9085 16.9729 77.5371 17.2446 77.0934 17.4348C76.6496 17.634 76.1334 17.7246 75.5356 17.7246ZM75.5356 16.194C76.0609 16.194 76.4413 15.9948 76.6768 15.6053C76.9122 15.2159 77.0209 14.6453 77.0209 13.9118C77.0209 13.1782 76.9032 12.6076 76.6768 12.2182C76.4413 11.8287 76.0609 11.6295 75.5356 11.6295C75.0194 11.6295 74.639 11.8287 74.4126 12.2182C74.1771 12.6076 74.0685 13.1782 74.0685 13.9118C74.0685 14.6453 74.1862 15.2159 74.4126 15.6053C74.639 16.0038 75.0103 16.194 75.5356 16.194ZM60.8096 10.2348C60.9454 10.2076 61.0722 10.1895 61.2081 10.1714C61.3439 10.1533 61.4888 10.1533 61.6519 10.1533C61.8149 10.1533 61.9507 10.1623 62.0775 10.1714C62.2043 10.1895 62.3311 10.2076 62.4579 10.2348C62.4851 10.2801 62.5122 10.3525 62.5394 10.4431C62.5666 10.5336 62.5847 10.6242 62.6028 10.7238C62.6209 10.8235 62.639 10.9231 62.6481 11.0136C62.6662 11.1042 62.6753 11.1857 62.6843 11.2582C62.7568 11.1133 62.8564 10.9774 62.9832 10.8325C63.11 10.6876 63.2549 10.5608 63.4179 10.4521C63.59 10.3344 63.7802 10.2438 63.9885 10.1714C64.1968 10.0989 64.4413 10.0627 64.7039 10.0627C65.8451 10.0627 66.5786 10.4974 66.8956 11.3668C67.0858 11.0136 67.3485 10.7148 67.6926 10.4521C68.0368 10.1895 68.4715 10.0627 69.0058 10.0627C69.839 10.0627 70.4458 10.2891 70.8443 10.751C71.2337 11.2129 71.433 11.9284 71.433 12.8974V17.5616C71.0888 17.6159 70.7537 17.6431 70.4277 17.6431C70.0926 17.6431 69.7575 17.6159 69.4224 17.5616V13.4227C69.4224 12.9155 69.359 12.517 69.2322 12.2453C69.1054 11.9736 68.8519 11.8378 68.4624 11.8378C68.2994 11.8378 68.1454 11.865 67.9915 11.9102C67.8375 11.9555 67.6926 12.0461 67.5658 12.1729C67.439 12.2997 67.3303 12.4808 67.2579 12.7072C67.1764 12.9427 67.1402 13.2416 67.1402 13.6038V17.5525C66.796 17.6068 66.4609 17.634 66.1349 17.634C65.7998 17.634 65.4647 17.6068 65.1296 17.5525V13.4136C65.1296 12.9065 65.0662 12.508 64.9394 12.2363C64.8126 11.9646 64.559 11.8287 64.1696 11.8287C64.0066 11.8287 63.8526 11.8559 63.6896 11.9012C63.5266 11.9465 63.3817 12.037 63.2549 12.1819C63.1281 12.3178 63.0285 12.508 62.947 12.7525C62.8745 12.997 62.8292 13.3231 62.8292 13.7125V17.5525C62.4851 17.6068 62.15 17.634 61.8239 17.634C61.4888 17.634 61.1537 17.6068 60.8186 17.5525V10.2348H60.8096ZM55.4481 10.2348C55.593 10.2076 55.7198 10.1895 55.8556 10.1714C55.9824 10.1533 56.1183 10.1533 56.2722 10.1533C56.4171 10.1533 56.553 10.1623 56.6888 10.1804C56.8247 10.1985 56.9605 10.2257 57.0964 10.2529C57.1236 10.2982 57.1507 10.3706 57.1779 10.4612C57.2051 10.5518 57.2232 10.6423 57.2413 10.7419C57.2594 10.8416 57.2775 10.9412 57.2866 11.0408C57.3047 11.1404 57.3137 11.2219 57.3228 11.2853C57.5311 10.9955 57.7847 10.7329 58.0836 10.4974C58.3824 10.2619 58.7628 10.1533 59.2156 10.1533C59.3062 10.1533 59.4149 10.1623 59.5417 10.1714C59.6685 10.1804 59.75 10.1985 59.8134 10.2167C59.8315 10.3072 59.8496 10.4159 59.8587 10.5427C59.8677 10.6695 59.8768 10.7963 59.8768 10.9231C59.8768 11.0861 59.8677 11.2582 59.8587 11.4484C59.8405 11.6385 59.8224 11.8197 59.7771 11.9827C59.6775 11.9646 59.5598 11.9555 59.433 11.9555H59.1975C59.0345 11.9555 58.8534 11.9736 58.6632 12.0008C58.4639 12.037 58.2737 12.1185 58.0926 12.2635C57.9115 12.4084 57.7666 12.6167 57.6488 12.8974C57.5311 13.1782 57.4677 13.5767 57.4677 14.0838V17.5706C57.2956 17.5978 57.1236 17.6159 56.9605 17.625C56.7885 17.634 56.6254 17.6431 56.4624 17.6431C56.2994 17.6431 56.1364 17.634 55.9734 17.625C55.8103 17.6159 55.6383 17.5978 55.4571 17.5706V10.2348H55.4481ZM49.9054 14.5095C49.9417 15.0801 50.1409 15.4876 50.5032 15.7412C50.8654 15.9948 51.3364 16.1216 51.916 16.1216C52.233 16.1216 52.5681 16.0944 52.9032 16.031C53.2383 15.9676 53.5553 15.8861 53.8632 15.7684C53.9628 15.9585 54.0534 16.185 54.1349 16.4476C54.2073 16.7102 54.2526 16.991 54.2617 17.2989C53.5281 17.5797 52.6949 17.7246 51.7711 17.7246C51.0919 17.7246 50.5122 17.634 50.0232 17.4438C49.5341 17.2536 49.1356 16.991 48.8368 16.6559C48.5288 16.3208 48.3024 15.9223 48.1575 15.4604C48.0126 14.9985 47.9402 14.4914 47.9402 13.948C47.9402 13.4136 48.0126 12.9065 48.1666 12.4355C48.3205 11.9646 48.5379 11.548 48.8368 11.2038C49.1356 10.8506 49.507 10.5789 49.9417 10.3706C50.3764 10.1714 50.8926 10.0627 51.4813 10.0627C51.9885 10.0627 52.4413 10.1533 52.8398 10.3344C53.2383 10.5155 53.5734 10.7601 53.8541 11.068C54.1349 11.3759 54.3432 11.7472 54.4881 12.1819C54.633 12.6076 54.6964 13.0695 54.6964 13.5676C54.6964 13.7487 54.6873 13.9208 54.6783 14.1019C54.6602 14.274 54.6511 14.4189 54.633 14.5185H49.9054V14.5095ZM52.7764 13.1057C52.7583 12.6529 52.6315 12.2906 52.4051 12.0099C52.1696 11.7291 51.8526 11.5933 51.436 11.5933C50.9651 11.5933 50.6028 11.7291 50.3583 11.9918C50.1137 12.2544 49.9688 12.6257 49.9236 13.1148H52.7764V13.1057ZM43.4753 11.7653H42.5515L42.479 11.4846L45.1326 8.09742H45.4587V10.2348H47.1703C47.1975 10.3797 47.2156 10.5065 47.2247 10.6152C47.2337 10.7329 47.2428 10.8506 47.2428 10.9684C47.2428 11.1042 47.2337 11.231 47.2247 11.3487C47.2156 11.4755 47.1975 11.6114 47.1703 11.7563H45.4587V14.6363C45.4587 14.9261 45.4858 15.1616 45.5311 15.3427C45.5764 15.5238 45.6488 15.6597 45.7394 15.7684C45.83 15.868 45.9387 15.9404 46.0745 15.9767C46.2103 16.0129 46.3643 16.031 46.5454 16.031C46.6903 16.031 46.8262 16.0219 46.962 15.9948C47.0979 15.9676 47.2156 15.9495 47.3243 15.9314C47.3877 16.1125 47.442 16.2936 47.4692 16.4929C47.4964 16.6831 47.5145 16.8552 47.5145 17.0091C47.5145 17.1087 47.5145 17.1993 47.5054 17.2718C47.4964 17.3442 47.4964 17.4076 47.4873 17.4801C47.0526 17.5797 46.5998 17.634 46.1379 17.634C45.2775 17.634 44.6254 17.4348 44.1726 17.0363C43.7198 16.6378 43.4934 15.9767 43.4934 15.071V11.7653H43.4753ZM38.159 11.7653H37.2353L37.1628 11.4846L39.8164 8.09742H40.1424V10.2348H41.8541C41.8813 10.3797 41.8994 10.5065 41.9085 10.6152C41.9175 10.7329 41.9266 10.8506 41.9266 10.9684C41.9266 11.1042 41.9175 11.231 41.9085 11.3487C41.8994 11.4755 41.8813 11.6114 41.8541 11.7563H40.1424V14.6363C40.1424 14.9261 40.1696 15.1616 40.2149 15.3427C40.2602 15.5238 40.3326 15.6597 40.4232 15.7684C40.5137 15.868 40.6224 15.9404 40.7583 15.9767C40.8941 16.0129 41.0481 16.031 41.2292 16.031C41.3741 16.031 41.51 16.0219 41.6458 15.9948C41.7817 15.9676 41.8994 15.9495 42.0081 15.9314C42.0715 16.1125 42.1258 16.2936 42.153 16.4929C42.1802 16.6831 42.1983 16.8552 42.1983 17.0091C42.1983 17.1087 42.1983 17.1993 42.1892 17.2718C42.1802 17.3442 42.1802 17.4076 42.1711 17.4801C41.7364 17.5797 41.2836 17.634 40.8217 17.634C39.9613 17.634 39.3092 17.4348 38.8564 17.0363C38.4036 16.6378 38.1771 15.9767 38.1771 15.071V11.7653H38.159ZM34.8624 14.2016C34.7447 14.1835 34.6269 14.1653 34.4911 14.1563C34.3553 14.1382 34.2375 14.1382 34.1379 14.1382C33.676 14.1382 33.3047 14.2197 33.042 14.3827C32.7703 14.5457 32.6345 14.8174 32.6345 15.1797C32.6345 15.4242 32.6888 15.6144 32.7885 15.7502C32.8881 15.8861 33.0149 15.9767 33.1598 16.0401C33.3047 16.1035 33.4586 16.1397 33.6307 16.1578C33.7937 16.1759 33.9386 16.1759 34.0654 16.1759C34.2103 16.1759 34.3462 16.1668 34.4911 16.1397C34.636 16.1125 34.7537 16.0944 34.8624 16.0763V14.2016ZM34.8624 12.7435C34.8624 12.517 34.8262 12.3359 34.7447 12.191C34.6722 12.0461 34.5636 11.9374 34.4368 11.8559C34.3009 11.7744 34.1379 11.7201 33.9477 11.6929C33.7575 11.6657 33.5402 11.6476 33.3047 11.6476C32.7975 11.6476 32.2541 11.7472 31.6745 11.9465C31.5386 11.7019 31.439 11.4665 31.3756 11.2491C31.3122 11.0318 31.276 10.7691 31.276 10.4702C31.6926 10.3253 32.1092 10.2257 32.5258 10.1623C32.9424 10.0989 33.3319 10.0627 33.6851 10.0627C34.6632 10.0627 35.433 10.2982 35.9854 10.7691C36.5379 11.2401 36.8186 12.0008 36.8186 13.0333V17.2808C36.4836 17.3804 36.0851 17.4801 35.6141 17.5797C35.1432 17.6702 34.6088 17.7246 34.0111 17.7246C33.5311 17.7246 33.0873 17.6793 32.6888 17.5978C32.2903 17.5163 31.9462 17.3714 31.6564 17.1721C31.3666 16.9729 31.1492 16.7193 30.9862 16.4114C30.8322 16.1035 30.7507 15.714 30.7507 15.2612C30.7507 14.8084 30.8503 14.428 31.0405 14.1201C31.2307 13.8121 31.4843 13.5676 31.7922 13.3865C32.1002 13.2053 32.4443 13.0695 32.8156 12.988C33.196 12.9065 33.5673 12.8702 33.9477 12.8702C34.2194 12.8702 34.5273 12.8884 34.8534 12.9155V12.7435H34.8624Z'
            fill='#818698'
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.8135 6.47609L11.895 8.05193C13.172 9.46476 13.6792 11.4663 13.0452 13.35C12.0943 16.1576 8.96068 17.6338 6.0354 16.6466C3.11012 15.6595 1.52521 12.5802 2.47616 9.77269C3.11917 7.87986 4.74031 6.59382 6.62408 6.25873L7.63842 5.0542C4.45955 4.97269 1.47087 6.93797 0.393137 10.1078C-0.920071 14.0021 1.16295 18.2225 5.05729 19.5357C8.95163 20.8489 13.172 18.7659 14.4852 14.8716C15.5539 11.7199 14.3765 8.33269 11.8135 6.47609Z'
            fill='#818698'
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9.99336 11.1312L9.93902 8.92143L9.89373 7.65351L9.86656 6.5486C9.86656 6.5486 9.87562 6.01426 9.85751 5.89652C9.85751 5.86936 9.84845 5.85124 9.8394 5.83313V5.81502C9.82128 5.77879 9.78506 5.75162 9.74883 5.73351C9.70355 5.71539 9.65826 5.72445 9.62204 5.74256C9.62204 5.74256 9.61298 5.74256 9.61298 5.75162C9.59487 5.76068 9.57675 5.76973 9.55864 5.78785C9.46807 5.87841 9.15109 6.30407 9.15109 6.30407L8.46279 7.16445L7.65676 8.15162L6.2711 9.87237C6.2711 9.87237 5.63714 10.6603 5.77299 11.6384C5.90884 12.6165 6.64242 13.0875 7.20393 13.2777C7.76544 13.4678 8.63487 13.5312 9.33223 12.8429C10.0115 12.1456 9.99336 11.1312 9.99336 11.1312Z'
            fill='#818698'
        />
    </Svg>

);

export default MattermostLogo;