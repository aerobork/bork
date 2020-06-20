"use strict"

const Rocket = require("./Rocket.js");
const Quaternion = require("quaternion");

class Simulation {

    constructor(rocket, state) {
        `
            all simulation poarameter :))))),
            aref (cm^2), dref (cm), p (kg / m^3), mach (m/s)
        `
        this.state = state;
        this.rocket = rocket;

        this.velocities = [1.8007, 3.6162, 5.4979, 7.3936, 9.2665, 11.113, 12.913, 14.658, 16.347, 17.979, 19.548, 21.049, 22.483, 23.849, 25.148, 26.379, 27.545, 28.643, 29.675, 30.639, 31.528, 32.343, 33.084, 33.751, 34.351, 34.902, 35.406, 35.864, 36.276, 36.659, 37.021, 37.361, 37.68, 37.978, 38.255, 38.516, 38.77, 39.016, 39.255, 39.487, 39.711, 39.928, 40.138, 40.341, 40.537, 40.725, 40.908, 41.085, 41.26, 41.432, 41.601, 41.767, 41.931, 42.091, 42.249, 42.404, 42.556, 42.705, 42.852, 42.996, 43.137, 43.274, 43.408, 43.538, 43.665, 43.789, 43.909, 44.026, 44.14, 44.251, 44.358, 44.463, 44.564, 44.662, 44.758, 44.855, 44.953, 45.052, 45.152, 45.252, 45.354, 45.457, 45.56, 45.665, 45.77, 45.876, 45.983, 46.091, 46.199, 46.308, 46.414, 46.519, 46.621, 46.722, 46.82, 46.917, 47.012, 47.104, 47.196, 47.285, 47.372, 47.458, 47.542, 47.624, 47.705, 47.784, 47.861, 47.936, 48.01, 48.082, 48.152, 48.221, 48.287, 48.352, 
            48.416, 48.477, 48.538, 48.596, 48.653, 48.708, 48.762, 48.815, 48.867, 48.919, 48.971, 49.022, 49.072, 49.123, 49.172, 49.222, 49.271, 49.319, 49.368, 49.415, 49.459, 49.498, 49.532, 49.531, 49.449, 49.11, 48.475, 47.658, 46.805, 45.965, 45.137, 44.321, 43.516, 42.723, 41.941, 41.169, 40.407, 39.655, 38.913, 38.18, 37.456, 36.741, 36.034, 35.336, 34.645, 33.962, 33.286, 32.618, 31.956, 31.302, 30.654, 30.012, 29.377, 28.748, 28.124, 27.506, 26.894, 26.287, 25.685, 25.088, 24.496, 23.908, 23.326, 22.747, 22.173, 21.603, 21.037, 20.475, 19.917, 19.362, 18.811, 18.263, 17.719, 17.177, 16.639, 16.104, 15.571, 15.041, 14.514, 13.99, 13.468, 12.948, 12.43, 11.915, 11.401, 10.89, 10.381, 9.8729, 9.3669, 8.8625, 8.3597, 7.8583, 7.3583, 6.8595, 6.3619, 5.8655, 5.3701, 4.8756, 4.382, 3.8891, 3.397, 2.9055, 2.4145, 1.924, 1.4338, 0.94397, 0.45429, -0.035278, -0.52479, -1.0142, -1.5033, -1.9921, -2.4805, -2.9683, -3.4554, -3.9416, -4.4268, -4.8772, -5.2527, -5.5806, -5.8753, -6.1452, -6.3958, -6.631, -6.8537, -7.0659, -7.2693, -7.4654, -7.655, -7.8393, -8.0188, -8.1944, -8.3666, -8.5359, -8.7028, -8.8677, -9.0308, -9.1926, -9.3534, -9.5133, -9.6726, -9.8315, -9.9901, -10.148, -10.306, -10.459, -10.598, -10.725, -10.84, -10.943, -11.036, -11.118, -11.192, -11.256, -11.312, -11.362, -11.405, -11.443, -11.477, -11.508, -11.537, -11.565, -11.593, -11.623, -11.654, -11.689, -11.727, -11.77, -11.818, -11.871, -11.93, -11.995, -12.066, -12.143, -12.226, -12.293, -12.366, -12.449, -12.54, -12.638, -12.743, -12.853, -12.968, -13.087, -13.213, -13.343, -13.479, -13.619, -13.735, -13.831, -13.914, -13.989, -14.057, -14.121, -14.181, -14.237, -14.29, -14.341, -14.39, -14.436, -14.481, -14.524, -14.565, -14.605, -14.643, -14.681, -14.717, -14.752, -14.786, -14.82, -14.852, -14.884, -14.915, -14.945, -14.975, -15.004, -15.032, -15.06, -15.088, -15.115, -15.142, -15.169, -15.195, -15.222, -15.248, -15.274, -15.3, -15.326, -15.352, -15.378, -15.403, -15.429, -15.454, -15.479, -15.504, -15.529, -15.554, -15.579, -15.603, -15.628, -15.653, -15.679, -15.705, -15.731, -15.758, -15.786, -15.814, -15.843, -15.873, -15.904, -15.936, -15.97, -16.005, -16.042, -16.081, 
            -16.122, -16.166, -16.214, -16.266, -16.323, -16.387, -16.461, -16.549, -16.662, -16.832, -17.055, -17.282, -17.416, -17.517, -17.602, -17.677, -17.746, -17.809, -17.869, -17.925, -17.979, -18.03, -18.08, -18.127, -18.174, -18.219, -18.263, -18.306, -18.348, -18.39, -18.431, -18.471, -18.511, -18.551, -18.59, -18.629, -18.668, -18.707, -18.746, -18.785, -18.825, -18.864, -18.904, -18.945, -18.986, -19.028, -19.071, -19.115, -19.161, -19.209, -19.258, -19.311, -19.366, -19.425, -19.489, -19.56, -19.64, -19.734, -19.854, -20.032, -20.3, -20.52, -20.628, -20.716, -20.792, -20.86, -20.923, -20.983, -21.039, -21.092, -21.144, -21.194, -21.242, -21.29, -21.337, -21.383, -21.429, -21.474, -21.52, -21.565, -21.611, -21.657, -21.703, -21.751, -21.8, -21.851, -21.903, -21.958, -22.017, -22.079, -22.148, -22.224, -22.312, -22.42, -22.57, -22.797, -23.136, -23.24, -23.326, -23.403, -23.473, -23.539, -23.602, -23.662, -23.72, -23.777, -23.833, -23.888, -23.943, -23.998, -24.054, -24.11, -24.168, -24.228, -24.29, -24.356, -24.426, -24.503, -24.59, -24.693, -24.828, -25.031, -25.331, 
            -25.465, -25.563, -25.647, -25.723, -25.793, -25.86, -25.924, -25.987, -26.049, -26.111, -26.174, -26.237, -26.303, -26.372, -26.445, -26.526, -26.617, -26.727, -26.877, -27.102, -27.439, -27.547, -27.638, -27.721, -27.798, -27.872, -27.945, -28.017, -28.09, -28.166, -28.245, -28.331, -28.427, -28.541, -28.697, -28.93, -29.275, -29.382, -29.475, -29.56, -29.643, -29.724, -29.807, -29.893, -29.987, -30.093, -30.226, -30.426, -30.724, -30.889, -31.005, -31.107, -31.202, -31.297, -31.394, -31.498, -31.619, -31.777, -32.012, -32.33, -32.461, -32.574, -32.681, -32.79, -32.909, -33.054, -33.271, -33.576, -33.752, -33.884, -34.007, -34.137, -34.288, -34.514, -34.805, -35.002, -35.147, -35.291, -35.458, -35.708, -35.986, -36.184, -36.348, -36.531, -36.799, -37.064, -37.277, -37.469, -37.726, -37.98, -38.231, -38.455, -38.699, -38.94, -39.178, -39.414, -39.646, -39.876, -40.102, -40.326, -40.546, -40.764, -40.978, -41.19, -41.399, -41.605, -41.809, -42.009, -42.207, -42.402, -42.594, -42.784, -42.971, -43.156, -43.337, -43.516, -43.693, -43.867, -44.039, -44.208, -44.374, -44.538, -44.7, -44.859, -45.016, -45.171, -45.323, -45.473, -45.621, -45.767, -45.91, -46.051, -46.19, -46.327, -46.461, -46.594, -46.725, -46.853, -46.98, -47.104, -47.227, -47.347, -47.466, -47.583, -47.697, -47.81, -47.922, -48.031, -48.139, -48.245, -48.349, -48.451, -48.552, -48.651, -48.748, -48.844, -48.938, -49.031, -49.122, -49.211, -49.299, -49.386, -49.471, -49.555, -49.637, -49.718, -49.797, -49.875, -49.952, -50.027, -50.101, -50.173, -50.245, -50.315, -50.384, -50.452, -50.518, -50.583, -50.648, -50.711, -50.772, -50.833, -50.893, -50.951, -51.009, -51.065, -51.121, -51.175, -51.228, -51.281, -51.332, -51.382, -51.432, -51.481, -51.528, -51.575, -51.621, -51.666, -51.71, -51.753, -51.796, -51.837];
        this.counter = 0;

        this.reynoldsNumbers = [85214.0, 171123.0, 260163.0, 349860.0, 438472.0, 525844.0, 610972.0, 693487.0, 773349.0, 850514.0, 924661.0, 995612.0, 1063349.0, 1127855.0, 1189145.0, 1247271.0, 1302231.0, 1354026.0, 1402661.0, 1448042.0, 1489895.0, 1528218.0, 1563033.0, 1594361.0, 1622478.0, 1648282.0, 1671868.0, 1693253.0, 1712484.0, 1730339.0, 1747165.0, 1762972.0, 1777768.0, 1791565.0, 
            1804371.0, 1816435.0, 1828135.0, 1839478.0, 1850465.0, 1861101.0, 1871390.0, 1881333.0, 1890935.0, 1900200.0, 1909130.0, 1917729.0, 1926003.0, 1934073.0, 1942000.0, 1949785.0, 1957429.0, 1964934.0, 1972302.0, 1979533.0, 1986628.0, 1993590.0, 2000420.0, 2007118.0, 2013686.0, 2020125.0, 2026407.0, 2032521.0, 2038468.0, 2044252.0, 2049872.0, 2055333.0, 2060635.0, 2065780.0, 2070770.0, 2075607.0, 2080294.0, 2084831.0, 2089221.0, 2093465.0, 2097609.0, 2101789.0, 2106012.0, 2110278.0, 2114587.0, 2118937.0, 2123328.0, 2127759.0, 2132229.0, 2136738.0, 2141285.0, 2145870.0, 2150490.0, 2155147.0, 2159839.0, 2164520.0, 2169106.0, 2173596.0, 2177990.0, 2182291.0, 2186499.0, 2190615.0, 2194641.0, 2198577.0, 2202426.0, 2206187.0, 2209863.0, 2213454.0, 2216962.0, 2220387.0, 2223731.0, 2226994.0, 2230179.0, 2233280.0, 2236295.0, 2239224.0, 2242071.0, 2244835.0, 2247517.0, 2250119.0, 2252643.0, 2255088.0, 2257457.0, 2259750.0, 2261968.0, 2264112.0, 2266185.0, 2268204.0, 2270202.0, 2272177.0, 2274131.0, 2276064.0, 2277975.0, 2279866.0, 2281736.0, 2283587.0, 2285417.0, 2287228.0, 2289019.0, 2290785.0, 2292376.0, 2293735.0, 2294856.0, 2294363.0, 2290112.0, 2273989.0, 2244137.0, 2205898.0, 2166003.0, 2126723.0, 2088036.0, 2049924.0, 2012369.0, 1975351.0, 1938854.0, 1902861.0, 1867356.0, 1832324.0, 1797750.0, 1763619.0, 1729919.0, 1696634.0, 1663754.0, 1631265.0, 1599155.0, 1567413.0, 1536027.0, 1504988.0, 1474283.0, 1443904.0, 1413840.0, 1384082.0, 1354620.0, 1325446.0, 1296550.0, 1267925.0, 1239562.0, 1211454.0, 1183592.0, 1155969.0, 1128577.0, 1101410.0, 1074461.0, 1047722.0, 1021187.0, 994850.0, 968705.0, 942744.0, 916963.0, 891356.0, 865916.0, 840638.0, 815516.0, 790546.0, 765722.0, 741038.0, 716489.0, 692072.0, 667779.0, 643608.0, 619553.0, 595610.0, 571774.0, 548040.0, 524405.0, 500863.0, 477412.0, 454045.0, 430760.0, 407552.0, 384417.0, 361350.0, 338349.0, 315408.0, 292525.0, 269695.0, 246914.0, 224178.0, 201484.0, 178828.0, 156206.0, 133615.0, 111053.0, 88516.0, 66006.0, 43534.0, 21172.0, 3839.6, 24373.0, 46748.0, 69189.0, 91634.0, 114068.0, 136480.0, 158864.0, 181213.0, 203517.0, 224224.0, 241491.0, 256579.0, 270139.0, 282561.0, 294100.0, 304934.0, 315193.0, 324976.0, 334358.0, 343402.0, 352157.0, 360666.0, 368964.0, 377083.0, 385052.0, 392893.0, 400628.0, 408275.0, 415853.0, 423377.0, 430862.0, 438321.0, 445765.0, 453203.0, 460645.0, 468096.0, 475557.0, 482781.0, 489413.0, 495480.0, 501005.0, 506011.0, 510520.0, 514555.0, 518142.0, 521308.0, 524084.0, 526506.0, 528612.0, 530442.0, 532041.0, 533455.0, 534735.0, 535929.0, 537088.0, 538263.0, 539501.0, 540850.0, 542351.0, 544043.0, 545959.0, 548128.0, 550570.0, 553301.0, 556328.0, 559654.0, 563273.0, 566137.0, 569324.0, 573010.0, 
            577136.0, 581637.0, 586453.0, 591527.0, 596822.0, 602383.0, 608194.0, 614242.0, 620512.0, 626990.0, 632346.0, 636735.0, 640563.0, 644008.0, 647164.0, 650093.0, 652835.0, 655419.0, 657867.0, 660196.0, 662419.0, 664549.0, 666593.0, 668561.0, 670459.0, 672293.0, 674068.0, 675789.0, 677459.0, 679084.0, 680665.0, 682206.0, 683711.0, 685181.0, 686619.0, 688027.0, 689408.0, 690763.0, 692095.0, 693405.0, 694695.0, 695967.0, 697231.0, 698492.0, 699750.0, 701005.0, 702256.0, 703504.0, 704748.0, 705989.0, 707227.0, 708460.0, 709690.0, 710916.0, 712138.0, 713357.0, 714571.0, 715782.0, 716990.0, 718195.0, 719399.0, 720612.0, 721840.0, 723086.0, 724354.0, 725647.0, 726966.0, 728318.0, 729704.0, 731129.0, 732599.0, 734119.0, 735695.0, 737334.0, 739047.0, 740843.0, 742735.0, 744739.0, 746877.0, 749175.0, 751669.0, 754411.0, 757476.0, 760989.0, 765171.0, 770504.0, 778470.0, 788790.0, 799183.0, 805308.0, 809858.0, 813687.0, 817072.0, 820146.0, 822985.0, 825642.0, 828150.0, 830535.0, 832817.0, 835011.0, 837130.0, 839184.0, 841182.0, 843131.0, 845037.0, 846908.0, 848747.0, 850560.0, 852351.0, 854124.0, 855883.0, 857632.0, 859373.0, 861111.0, 862849.0, 864590.0, 866338.0, 868096.0, 869870.0, 871665.0, 873487.0, 875343.0, 877240.0, 879186.0, 881190.0, 883264.0, 885420.0, 887675.0, 890049.0, 892569.0, 895271.0, 898206.0, 901450.0, 905126.0, 909459.0, 914944.0, 923165.0, 935549.0, 945781.0, 950801.0, 954859.0, 958395.0, 961588.0, 964538.0, 967303.0, 969926.0, 972437.0, 974855.0, 977200.0, 979486.0, 981725.0, 983927.0, 986101.0, 988257.0, 990401.0, 992541.0, 994684.0, 996840.0, 999017.0, 1001227.0, 1003481.0, 1005794.0, 1008181.0, 1010662.0, 1013262.0, 1016015.0, 1018963.0, 1022175.0, 1025752.0, 1029875.0, 1034916.0, 1041902.0, 1052411.0, 1068030.0, 1072788.0, 1076740.0, 1080240.0, 1083445.0, 1086442.0, 
            1089290.0, 1092024.0, 1094675.0, 1097267.0, 1099817.0, 1102343.0, 1104860.0, 1107384.0, 1109928.0, 1112513.0, 1115160.0, 1117895.0, 1120749.0, 1123765.0, 1127002.0, 1130549.0, 1134558.0, 1139321.0, 1145561.0, 1154938.0, 1168920.0, 1175154.0, 1179745.0, 1183665.0, 1187204.0, 1190498.0, 1193628.0, 1196648.0, 1199601.0, 1202517.0, 1205426.0, 1208359.0, 1211348.0, 1214435.0, 1217668.0, 1221117.0, 1224887.0, 1229159.0, 1234295.0, 1241294.0, 1251781.0, 1267355.0, 1272346.0, 1276555.0, 1280356.0, 1283920.0, 1287344.0, 1290698.0, 1294038.0, 1297418.0, 1300901.0, 1304566.0, 1308529.0, 1312974.0, 1318291.0, 1325546.0, 1336399.0, 1352503.0, 1357514.0, 1361865.0, 1365893.0, 1369765.0, 1373592.0, 1377479.0, 1381536.0, 1385925.0, 1390921.0, 1397149.0, 1406474.0, 1420362.0, 1428062.0, 1433443.0, 1438156.0, 1442596.0, 1446987.0, 1451503.0, 1456373.0, 1461995.0, 1469372.0, 1480390.0, 1495272.0, 1501465.0, 1506760.0, 1511802.0, 1516937.0, 1522545.0, 1529351.0, 1539517.0, 1553818.0, 1562049.0, 1568207.0, 1573994.0, 1580000.0, 1587148.0, 1597756.0, 1611454.0, 1620744.0, 1627595.0, 1634363.0, 1642265.0, 1654035.0, 1667122.0, 1676461.0, 1684168.0, 1692806.0, 1705469.0, 1717983.0, 1728078.0, 1737206.0, 1749362.0, 1761376.0, 1773245.0, 1783857.0, 1795470.0, 1806944.0, 1818277.0, 1829478.0, 1840546.0, 1851476.0, 1862274.0, 1872941.0, 1883477.0, 1893881.0, 1904155.0, 1914303.0, 1924321.0, 1934212.0, 1943979.0, 1953621.0, 1963139.0, 1972534.0, 1981808.0, 1990961.0, 2000000.0, 2008909.0, 2017707.0, 2026388.0, 2034954.0, 2043406.0, 2051744.0, 2060000.0, 2068087.0, 2076093.0, 2083990.0, 2091780.0, 2099463.0, 2107041.0, 2114515.0, 2121885.0, 2129153.0, 2136320.0, 2143388.0, 2150357.0, 2157228.0, 2164002.0, 2170681.0, 2177266.0, 2183758.0, 2190157.0, 2196465.0, 2202683.0, 2208812.0, 2214854.0, 2220808.0, 2226677.0, 2232461.0, 2238161.0, 2243779.0, 2249315.0, 2254770.0, 2260146.0, 2265444.0, 2270664.0, 2275807.0, 2280875.0, 2285868.0, 2290788.0, 2295635.0, 2300410.0, 2305115.0, 2309750.0, 
            2314317.0, 2318815.0, 2323246.0, 2327612.0, 2331912.0, 2336148.0, 2340320.0, 2344431.0, 2348479.0, 2352467.0, 2356395.0, 2360264.0, 2364074.0, 2367828.0, 2371524.0, 2375165.0, 2378751.0, 2382283.0, 2385761.0, 2389187.0, 2392561.0, 2395884.0, 2399157.0, 2402380.0, 2405554.0, 2408680.0, 2411758.0, 2414790.0, 2417776.0, 2420716.0, 2423612.0, 2426464.0, 2429272.0, 2432038.0, 2434762.0, 2437444.0, 2440085.0, 2442687.0, 2445249.0, 2447772.0, 2450256.0, 2452703.0]
;            
        
            this.frictionDragCoefficients = [0.388, 0.32567, 0.29518, 0.27613, 0.26282, 0.25279, 0.24493, 0.23858, 0.2333, 0.22884, 0.22502, 0.22172, 0.21884, 0.21631, 0.21407, 0.21208, 0.2103, 0.20872, 0.20729, 0.20602, 0.2049, 0.2039, 0.20302, 0.20225, 0.20157, 0.20096, 0.20042, 0.19993, 0.1995, 0.19911, 0.19874, 0.1984, 0.19809, 0.19779, 0.19753, 0.19728, 0.19704, 0.19681, 0.19658, 0.19637, 0.19616, 
                0.19597, 0.19578, 0.1956, 0.19542, 0.19526, 0.1951, 0.19494, 0.19479, 0.19465, 0.1945, 0.19436, 0.19422, 0.19409, 0.19396, 0.19383, 0.19371, 0.19358, 0.19346, 0.19335, 0.19323, 0.19312, 0.19302, 0.19291, 0.19281, 0.19272, 0.19262, 0.19253, 0.19245, 0.19236, 0.19228, 0.1922, 0.19212, 0.19205, 0.19198, 0.19191, 0.19183, 0.19176, 0.19169, 0.19161, 0.19154, 0.19146, 0.19139, 0.19131, 0.19123, 0.19116, 0.19108, 0.191, 0.19092, 0.19085, 0.19077, 0.1907, 0.19062, 0.19055, 0.19048, 0.19042, 0.19035, 0.19029, 0.19022, 0.19016, 0.1901, 0.19004, 0.18999, 0.18993, 0.18988, 0.18983, 0.18977, 0.18973, 0.18968, 0.18963, 0.18958, 0.18954, 0.1895, 0.18946, 0.18942, 0.18938, 0.18934, 0.1893, 0.18927, 0.18924, 0.1892, 0.18917, 0.18914, 0.18911, 0.18908, 0.18905, 0.18902, 0.18899, 0.18896, 0.18893, 0.1889, 0.18887, 0.18885, 0.18882, 0.18879, 0.18877, 0.18875, 0.18876, 0.18883, 0.18908, 0.18955, 0.19016, 0.19081, 0.19147, 0.19213, 0.1928, 0.19348, 0.19416, 0.19484, 0.19553, 0.19623, 0.19694, 0.19765, 0.19838, 0.19911, 0.19984, 0.20059, 0.20135, 0.20212, 0.2029, 0.20369, 0.20449, 0.2053, 0.20613, 0.20697, 0.20782, 0.20869, 0.20957, 0.21048, 0.21139, 0.21233, 0.21328, 0.21426, 0.21526, 0.21627, 0.21732, 0.21838, 0.21948, 0.2206, 0.22175, 0.22293, 0.22414, 0.22539, 0.22668, 0.22801, 0.22938, 0.23079, 0.23226, 0.23377, 0.23534, 0.23698, 0.23868, 0.24044, 0.24229, 0.24422, 0.24624, 0.24836, 0.25059, 0.25294, 0.25542, 0.25805, 0.26085, 0.26383, 0.26702, 0.27046, 0.27416, 0.27819, 0.28258, 0.28741, 0.29276, 0.29875, 0.30551, 0.31325, 0.32225, 0.33294, 0.34595, 0.36237, 0.38416, 0.41539, 0.46664, 0.58093, 0.75014, 0.55553, 0.45722, 0.41012, 0.38071, 0.35992, 0.34414, 0.33157, 0.32123, 0.31251, 0.30549, 0.30028, 0.29612, 0.29265, 0.28968, 0.28706, 0.28473, 0.28263, 0.2807, 0.27892, 0.27727, 0.27573, 0.27428, 
                0.27291, 0.2716, 0.27036, 0.26917, 0.26802, 0.26692, 0.26585, 0.26482, 0.26382, 0.26284, 0.26188, 0.26095, 0.26004, 0.25914, 0.25827, 0.25743, 0.25668, 0.25601, 0.2554, 0.25486, 0.25438, 0.25396, 0.25358, 0.25325, 0.25297, 0.25272, 0.25251, 0.25232, 0.25216, 0.25202, 0.25189, 0.25177, 0.25166, 0.25154, 0.25142, 0.25129, 0.25114, 0.25098, 0.25079, 0.25058, 0.25034, 0.25008, 0.24979, 0.24948, 0.24914, 0.24888, 0.24858, 0.24825, 0.24787, 0.24747, 0.24704, 0.24659, 0.24613, 0.24566, 0.24516, 0.24466, 0.24414, 0.24361, 0.24318, 0.24283, 0.24253, 0.24226, 0.24201, 0.24179, 0.24158, 0.24138, 0.24119, 0.24101, 0.24085, 0.24069, 0.24053, 0.24039, 0.24025, 0.24011, 0.23998, 0.23985, 0.23973, 0.23961, 0.2395, 0.23938, 0.23928, 0.23917, 0.23907, 0.23896, 0.23887, 0.23877, 0.23867, 0.23858, 0.23849, 0.2384, 0.23831, 0.23822, 0.23813, 0.23805, 0.23796, 0.23787, 0.23778, 0.2377, 0.23761, 0.23753, 0.23744, 0.23736, 0.23727, 0.23719, 0.23711, 0.23703, 0.23694, 0.23686, 0.23678, 0.2367, 0.23662, 0.23653, 0.23645, 0.23636, 0.23627, 0.23618, 0.23609, 0.236, 0.2359, 0.2358, 0.23569, 0.23559, 0.23547, 0.23536, 0.23523, 0.2351, 0.23497, 0.23482, 0.23466, 0.23448, 0.23429, 0.23407, 0.23381, 0.23348, 0.23299, 0.23236, 0.23174, 0.23138, 0.23112, 0.2309, 0.2307, 0.23053, 0.23037, 0.23022, 0.23007, 0.22994, 0.22981, 0.22969, 0.22957, 0.22946, 0.22935, 0.22924, 0.22914, 0.22903, 0.22893, 0.22883, 0.22874, 0.22864, 0.22855, 0.22845, 0.22836, 0.22826, 0.22817, 0.22808, 0.22799, 0.22789, 0.2278, 0.2277, 0.22761, 0.22751, 0.22741, 0.22731, 0.22721, 0.2271, 0.22699, 0.22687, 0.22675, 0.22662, 0.22648, 0.22633, 0.22617, 0.22598, 0.22577, 0.22549, 0.22509, 0.22449, 0.224, 0.22376, 0.22357, 0.22341, 0.22326, 0.22312, 0.22299, 0.22287, 0.22276, 0.22265, 0.22254, 0.22244, 0.22234, 0.22224, 0.22214, 0.22204, 0.22195, 0.22185, 0.22176, 0.22166, 0.22156, 0.22147, 0.22137, 0.22127, 0.22116, 0.22105, 0.22094, 0.22082, 0.22069, 0.22056, 0.2204, 0.22023, 0.22001, 0.21972, 0.21928, 0.21864, 0.21845, 0.21829, 0.21815, 0.21802, 0.21791, 0.21779, 0.21768, 0.21758, 0.21748, 0.21738, 0.21728, 0.21718, 0.21709, 0.21699, 0.21689, 0.21679, 0.21668, 0.21657, 0.21646, 0.21633, 0.2162, 0.21605, 0.21587, 0.21564, 0.21529, 0.21479, 0.21456, 0.2144, 0.21426, 0.21413, 0.21402, 0.21391, 0.2138, 0.2137, 0.21359, 0.21349, 0.21339, 0.21329, 0.21318, 0.21307, 0.21295, 0.21283, 
                0.21268, 0.21251, 0.21227, 0.21192, 0.21141, 0.21125, 0.21111, 0.21099, 0.21088, 0.21077, 0.21066, 0.21056, 0.21045, 0.21034, 0.21022, 0.2101, 0.20996, 0.2098, 0.20957, 0.20924, 0.20875, 0.2086, 0.20848, 0.20836, 0.20824, 0.20813, 0.20801, 0.2079, 0.20777, 0.20762, 0.20744, 0.20718, 0.20678, 0.20657, 0.20642, 0.20629, 0.20616, 0.20604, 0.20592, 0.20579, 0.20563, 0.20543, 0.20514, 0.20474, 0.20458, 0.20444, 0.20431, 0.20418, 0.20403, 0.20386, 0.2036, 0.20324, 0.20303, 0.20288, 0.20273, 0.20259, 0.20241, 0.20215, 0.20182, 0.2016, 0.20144, 
                0.20128, 0.20109, 0.20082, 0.20052, 0.2003, 0.20013, 0.19993, 0.19965, 0.19937, 0.19915, 0.19895, 0.19868, 0.19843, 0.19817, 0.19795, 0.1977, 0.19746, 0.19723, 0.197, 0.19677, 0.19655, 0.19634, 0.19612, 0.19592, 0.19571, 0.19551, 0.19532, 0.19512, 0.19493, 0.19475, 0.19457, 0.19439, 0.19421, 0.19404, 0.19387, 0.19371, 0.19354, 0.19338, 0.19323, 0.19307, 0.19292, 0.19278, 0.19263, 0.19249, 0.19235, 0.19221, 0.19208, 0.19194, 0.19181, 0.19169, 0.19156, 0.19144, 0.19132, 0.1912, 0.19108, 0.19097, 0.19085, 0.19074, 0.19064, 0.19053, 0.19042, 0.19032, 0.19022, 0.19012, 0.19002, 0.18993, 0.18983, 0.18974, 0.18965, 0.18956, 0.18948, 0.18939, 0.1893, 0.18922, 0.18914, 0.18906, 0.18898, 0.1889, 0.18883, 0.18875, 0.18868, 0.18861, 0.18854, 0.18847, 0.1884, 0.18833, 0.18827, 0.1882, 0.18814, 0.18808, 0.18801, 0.18795, 0.18789, 0.18783, 0.18778, 0.18772, 0.18767, 0.18761, 0.18756, 0.1875, 0.18745, 0.1874, 0.18735, 0.1873, 0.18725, 0.18721, 0.18716, 0.18711, 0.18707, 0.18702, 0.18698, 0.18694, 0.18689, 0.18685, 0.18681, 0.18677, 0.18673, 0.18669, 0.18666, 0.18662, 0.18658, 0.18654, 
                0.18651, 0.18647, 0.18644];
            
        this.baseDragCoefficients = [0.12, 0.12001, 0.12003, 0.12006, 0.1201, 0.12014, 0.12019, 0.12024, 0.1203, 0.12036, 0.12043, 0.1205, 0.12057, 0.12064, 0.12071, 0.12078, 0.12085, 0.12092, 0.12099, 0.12105, 0.12112, 0.12117, 0.12123, 0.12128, 0.12132, 0.12137, 0.12141, 0.12144, 0.12148, 0.12151, 0.12154, 0.12157, 0.12159, 0.12162, 0.12164, 0.12167, 0.12169, 0.12171, 0.12173, 0.12175, 0.12177, 0.12179, 0.12181, 0.12183, 0.12185, 0.12186, 0.12188, 0.1219, 0.12191, 0.12193, 0.12195, 0.12196, 0.12198, 0.12199, 0.12201, 0.12202, 0.12204, 0.12205, 0.12206, 0.12208, 0.12209, 0.12211, 
            0.12212, 0.12213, 0.12214, 0.12216, 0.12217, 0.12218, 0.12219, 0.1222, 0.12221, 0.12222, 0.12223, 0.12224, 0.12225, 0.12226, 0.12227, 0.12228, 0.12229, 0.12231, 0.12232, 0.12233, 0.12234, 0.12235, 0.12236, 0.12237, 0.12238, 0.12239, 0.1224, 0.12242, 0.12243, 0.12244, 0.12245, 0.12246, 0.12247, 0.12248, 0.12249, 0.1225, 0.12251, 0.12252, 0.12253, 0.12254, 0.12255, 0.12256, 0.12257, 0.12257, 0.12258, 0.12259, 0.1226, 0.12261, 0.12261, 0.12262, 0.12263, 0.12264, 0.12264, 0.12265, 0.12266, 0.12266, 0.12267, 0.12268, 0.12268, 0.12269, 0.12269, 0.1227, 0.12271, 0.12271, 0.12272, 0.12272, 0.12273, 0.12273, 0.12274, 0.12275, 0.12275, 0.12276, 0.12276, 0.12277, 0.12277, 0.12277, 0.12276, 0.12272, 0.12265, 0.12257, 0.12247, 0.12239, 0.1223, 0.12222, 0.12214, 0.12206, 0.12199, 0.12192, 0.12185, 0.12178, 0.12171, 0.12165, 0.12159, 0.12153, 0.12147, 0.12141, 0.12136, 0.1213, 0.12125, 0.1212, 0.12115, 0.12111, 0.12106, 0.12102, 0.12098, 0.12093, 0.12089, 0.12086, 0.12082, 0.12078, 0.12075, 0.12071, 0.12068, 0.12065, 0.12062, 0.12059, 0.12056, 0.12053, 0.1205, 0.12047, 0.12045, 0.12042, 0.1204, 0.12038, 0.12036, 0.12033, 0.12031, 0.12029, 0.12027, 0.12026, 0.12024, 0.12022, 0.12021, 0.12019, 0.12017, 0.12016, 0.12015, 0.12013, 0.12012, 0.12011, 0.1201, 0.12009, 0.12008, 0.12007, 0.12006, 0.12005, 0.12005, 0.12004, 0.12003, 0.12003, 0.12002, 0.12002, 0.12001, 0.12001, 0.12001, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12, 0.12001, 0.12001, 0.12001, 0.12002, 0.12002, 0.12003, 0.12003, 0.12004, 0.12004, 0.12004, 0.12005, 0.12005, 0.12005, 0.12006, 0.12006, 0.12006, 0.12007, 0.12007, 0.12007, 0.12008, 0.12008, 0.12008, 0.12009, 0.12009, 0.12009, 0.1201, 0.1201, 0.1201, 0.12011, 0.12011, 0.12011, 0.12012, 0.12012, 0.12012, 0.12013, 0.12013, 0.12013, 0.12014, 0.12014, 0.12014, 0.12014, 0.12015, 0.12015, 0.12015, 0.12015, 0.12015, 0.12015, 0.12015, 0.12015, 0.12015, 0.12015, 0.12015, 0.12016, 0.12016, 0.12016, 0.12016, 0.12016, 0.12016, 0.12016, 0.12016, 0.12017, 0.12017, 0.12017, 0.12017, 0.12017, 0.12018, 0.12018, 0.12018, 0.12018, 0.12019, 0.12019, 0.12019, 0.1202, 0.1202, 0.12021, 0.12021, 0.12021, 0.12022, 0.12022, 0.12022, 0.12022, 0.12023, 0.12023, 0.12023, 0.12023, 0.12023, 0.12023, 0.12024, 0.12024, 0.12024, 0.12024, 0.12024, 0.12024, 0.12024, 0.12025, 0.12025, 0.12025, 0.12025, 0.12025, 0.12025, 0.12025, 0.12025, 0.12025, 0.12025, 0.12026, 0.12026, 0.12026, 0.12026, 0.12026, 0.12026, 0.12026, 0.12026, 0.12026, 0.12026, 0.12027, 0.12027, 0.12027, 0.12027, 0.12027, 0.12027, 0.12027, 0.12027, 0.12027, 0.12027, 0.12027, 0.12028, 0.12028, 0.12028, 0.12028, 0.12028, 0.12028, 0.12028, 0.12028, 0.12028, 0.12028, 0.12029, 0.12029, 0.12029, 0.12029, 0.12029, 0.12029, 0.12029, 0.12029, 0.1203, 0.1203, 0.1203, 0.1203, 0.1203, 
            0.12031, 0.12031, 0.12031, 0.12032, 0.12032, 0.12033, 0.12034, 0.12035, 0.12035, 0.12035, 0.12036, 0.12036, 0.12036, 0.12036, 0.12037, 0.12037, 0.12037, 0.12037, 0.12037, 0.12038, 0.12038, 0.12038, 0.12038, 0.12038, 0.12038, 0.12039, 0.12039, 0.12039, 0.12039, 0.12039, 0.12039, 0.1204, 0.1204, 0.1204, 0.1204, 0.1204, 0.1204, 0.1204, 0.12041, 0.12041, 0.12041, 0.12041, 0.12041, 0.12042, 0.12042, 0.12042, 0.12042, 0.12042, 0.12043, 0.12043, 0.12043, 0.12044, 0.12044, 0.12045, 0.12045, 0.12047, 0.12048, 0.12048, 0.12049, 0.12049, 0.12049, 0.1205, 0.1205, 0.1205, 0.1205, 0.12051, 0.12051, 0.12051, 0.12051, 0.12052, 0.12052, 0.12052, 0.12052, 0.12052, 0.12053, 0.12053, 0.12053, 0.12053, 0.12054, 0.12054, 0.12054, 0.12054, 0.12055, 0.12055, 0.12055, 0.12056, 0.12056, 0.12056, 0.12057, 0.12058, 0.12059, 0.12061, 0.12061, 0.12062, 0.12062, 0.12062, 0.12063, 0.12063, 0.12063, 0.12064, 0.12064, 0.12064, 0.12065, 0.12065, 0.12065, 0.12065, 0.12066, 0.12066, 0.12066, 0.12067, 0.12067, 0.12068, 0.12068, 0.12068, 0.12069, 0.1207, 0.12071, 0.12073, 0.12073, 0.12074, 0.12074, 0.12075, 0.12075, 0.12076, 
            0.12076, 0.12076, 0.12077, 0.12077, 0.12078, 0.12078, 0.12078, 0.12079, 0.12079, 0.1208, 0.1208, 0.12081, 0.12082, 0.12083, 0.12085, 0.12086, 0.12086, 0.12087, 0.12087, 0.12088, 0.12088, 0.12089, 0.12089, 0.1209, 0.1209, 0.12091, 0.12091, 0.12092, 0.12093, 0.12095, 0.12097, 0.12098, 0.12098, 0.12099, 0.12099, 0.121, 0.121, 0.12101, 0.12102, 0.12102, 0.12103, 0.12105, 0.12107, 0.12108, 0.12109, 0.12109, 0.1211, 
            0.12111, 0.12111, 0.12112, 0.12113, 0.12114, 0.12116, 0.12118, 0.12119, 0.1212, 0.12121, 0.12122, 0.12122, 0.12123, 0.12125, 0.12127, 0.12129, 0.1213, 0.12131, 0.12132, 0.12133, 0.12135, 0.12137, 0.12138, 0.1214, 0.12141, 0.12142, 0.12144, 0.12146, 0.12148, 0.12149, 0.12151, 
            0.12153, 0.12155, 0.12157, 0.12159, 0.12161, 0.12163, 0.12165, 0.12167, 0.12169, 0.12171, 0.12173, 0.12175, 0.12177, 0.12179, 0.12182, 0.12184, 0.12186, 0.12188, 0.12189, 0.12191, 0.12193, 0.12195, 0.12197, 0.12199, 0.12201, 0.12203, 0.12205, 0.12206, 0.12208, 0.1221, 0.12212, 0.12214, 0.12215, 0.12217, 0.12219, 0.1222, 0.12222, 0.12224, 0.12225, 0.12227, 0.12228, 0.1223, 0.12232, 0.12233, 0.12235, 0.12236, 0.12237, 0.12239, 0.1224, 0.12242, 0.12243, 0.12245, 0.12246, 0.12247, 0.12249, 0.1225, 0.12251, 0.12252, 0.12254, 0.12255, 0.12256, 0.12257, 0.12259, 0.1226, 0.12261, 0.12262, 0.12263, 0.12264, 0.12265, 0.12266, 0.12267, 0.12268, 0.12269, 0.1227, 0.12271, 0.12272, 0.12273, 0.12274, 0.12275, 0.12276, 0.12277, 0.12278, 0.12279, 0.1228, 0.12281, 0.12281, 0.12282, 0.12283, 0.12284, 0.12285, 0.12285, 0.12286, 0.12287, 0.12288, 0.12288, 0.12289, 0.1229, 0.1229, 0.12291, 0.12292, 0.12292, 0.12293, 0.12294, 0.12294, 0.12295, 0.12295, 0.12296, 0.12296, 0.12297, 0.12298, 0.12298, 0.12299, 0.12299, 0.123, 0.123, 0.12301, 0.12301, 0.12302]

        
        this.axialDragCoefficients = [0.8217, 0.75939, 0.72894, 0.70994, 0.69669, 0.68674, 0.67897, 0.67272, 0.66755, 0.66336, 0.65992, 0.65699, 0.65447, 0.6523, 0.65041, 0.64875, 0.64729, 0.64601, 0.64489, 0.64389, 0.64303, 0.64227, 0.64161, 0.64104, 0.64055, 0.64011, 0.63972, 0.63938, 0.63908, 0.63881, 0.63856, 0.63832, 0.63811, 0.63792, 0.63774, 0.63757, 0.63742, 0.63726, 0.63712, 0.63698, 0.63685, 0.63673, 0.63661, 0.63649, 0.63638, 0.63628, 0.63618, 0.63609, 0.636, 0.63591, 0.63582, 0.63574, 0.63565, 0.63558, 0.6355, 0.63542, 0.63535, 0.63528, 0.63521, 0.63514, 0.63508, 0.63502, 0.63496, 0.6349, 0.63484, 0.63479, 0.63474, 0.63469, 0.63464, 0.63459, 0.63455, 0.63451, 0.63447, 0.63443, 0.63439, 0.63435, 0.63432, 0.63428, 0.63424, 0.6342, 0.63416, 0.63412, 0.63408, 0.63405, 0.63401, 0.63397, 0.63393, 0.63389, 0.63385, 0.63381, 0.63377, 0.63374, 0.6337, 0.63367, 0.63364, 0.6336, 0.63357, 0.63354, 0.63351, 0.63348, 0.63346, 0.63343, 0.6334, 0.63338, 0.63335, 0.63333, 0.63331, 0.63329, 0.63327, 0.63325, 0.63323, 0.63321, 0.63319, 0.63317, 0.63316, 0.63314, 0.63313, 0.63311, 0.6331, 0.63309, 0.63307, 0.63306, 0.63305, 0.63304, 0.63303, 0.63302, 0.63301, 0.633, 0.63298, 0.63297, 0.63296, 0.63296, 0.63295, 0.63294, 0.63293, 0.63292, 0.63292, 0.63293, 0.63296, 0.63309, 0.63332, 0.63364, 0.63398, 0.63434, 0.63471, 0.63509, 0.63549, 0.63589, 0.63631, 0.63674, 0.63719, 0.63765, 0.63812, 0.6386, 0.6391, 0.63961, 0.64013, 0.64067, 0.64123, 0.64179, 0.64238, 0.64298, 0.64359, 0.64423, 0.64488, 0.64554, 0.64623, 0.64693, 0.64766, 0.6484, 0.64917, 0.64996, 0.65077, 0.6516, 0.65246, 0.65335, 0.65426, 0.6552, 0.65618, 0.65718, 0.65822, 0.65929, 0.6604, 0.66155, 0.66275, 0.66398, 
            0.66527, 0.6666, 0.66804, 0.66958, 0.67118, 0.67284, 0.67458, 0.67639, 0.67829, 0.68028, 0.68237, 0.68458, 0.6869, 0.68936, 0.69197, 0.69474, 0.69771, 0.70088, 0.7043, 0.70799, 0.712, 0.71639, 0.72122, 0.72657, 0.73256, 0.73935, 0.74715, 0.75627, 0.76718, 0.78064, 0.798, 0.82194, 0.85894, 0.9302, 1.1622, -0.1609, -1.1625, -0.9577, -0.8823, -0.84139, -0.81504, -0.7967, -0.78367, -0.77487, -0.77011, -0.76974, -0.77305, -0.77924, -0.78789, -0.79869, -0.81135, -0.82553, -0.84081, -0.8567, -0.87255, -0.88758, -0.90083, -0.91111, -0.91699, -0.91691, -0.91236, -0.90403, -0.89173, -0.87526, -0.85447, -0.82919, -0.7993, -0.76467, -0.72524, -0.68093, -0.63175, -0.57772, -0.51897, -0.45785, -0.3983, -0.3412, -0.28728, -0.23718, -0.19139, -0.15032, -0.11427, -0.083405, -0.057801, -0.037399, -0.021994, -0.011224, -0.0045346, -0.0011578, -7.58e-05, 1.12e-05, 0.000661, 0.0034472, 0.0098246, 0.021088, 0.038337, 0.06244, 0.093994, 0.13329, 0.1803, 0.23464, 0.29557, 0.362, 0.43251, 0.50775, 0.58344, 0.65654, 0.7243, 0.78384, 0.83218, 0.86626, 0.8829, 0.8751, 0.83614, 0.78208, 0.72861, 0.68965, 0.6773, 0.68305, 0.69737, 0.71537, 0.73458, 0.75368, 0.77192, 0.78886, 0.80427, 0.81805, 0.83016, 0.84064, 0.84953, 0.85693, 0.86293, 0.86764, 0.87117, 0.87362, 0.87512, 0.87577, 0.87571, 0.8753, 0.87467, 0.87386, 0.87292, 0.87189, 0.87081, 0.8697, 0.86859, 0.8675, 0.86645, 0.86545, 0.86452, 0.86365, 0.86286, 0.86216, 0.86156, 0.86107, 0.86069, 0.86042, 0.86027, 0.86023, 0.86031, 0.86049, 0.86079, 0.86118, 0.86167, 0.86225, 0.86289, 0.8636, 0.86436, 0.86516, 0.86599, 0.86682, 0.86765, 0.86845, 0.8692, 0.86987, 0.87043, 0.87084, 0.87105, 0.87102, 0.87047, 0.86918, 0.86702, 0.86388, 0.85961, 0.85405, 0.847, 0.83826, 0.82757, 0.8146, 0.79895, 0.78008, 0.75721, 0.72907, 0.69358, 0.66822, 0.67366, 0.68852, 0.70275, 0.71587, 0.72781, 0.73861, 0.74833, 0.75706, 0.76486, 0.77182, 0.77801, 0.78348, 0.7883, 0.79252, 0.79619, 0.79935, 0.80204, 0.80428, 0.80612, 0.80757, 0.80866, 0.80939, 0.80979, 0.80986, 0.80961, 0.80904, 0.80815, 0.80693, 0.8054, 0.80352, 0.8013, 0.79872, 0.79575, 0.79238, 0.78859, 0.78433, 0.77958, 0.77431, 0.76846, 0.76199, 0.75484, 0.74696, 0.73827, 0.72869, 0.71811, 0.70643, 0.69353, 0.67934, 0.66456, 0.6616, 0.67472, 0.68395, 0.69193, 0.69893, 0.70506, 0.71042, 0.71509, 0.71911, 0.72254, 0.72541, 0.72776, 0.72962, 0.731, 0.73193, 0.73242, 0.73249, 0.73214, 0.73138, 0.73022, 0.72865, 0.72668, 0.7243, 0.7215, 0.71828, 0.71461, 0.71049, 0.70589, 0.70079, 0.69516, 0.68899, 0.68223, 0.67488, 0.66698, 0.65895, 0.65524, 0.66659, 0.67199, 0.67652, 0.68033, 0.68353, 0.68616, 0.68827, 0.68989, 0.69105, 0.69176, 0.69205, 0.69192, 0.69138, 0.69046, 0.68914, 0.68744, 0.68535, 0.68287, 0.68001, 0.67675, 0.67308, 0.66903, 0.66458, 0.65979, 0.65489, 0.65163, 0.65615, 0.66024, 0.66337, 0.66586, 0.6678, 0.66926, 0.67027, 0.67086, 0.67105, 0.67085, 0.67028, 0.66934, 0.66805, 0.66641, 0.66443, 0.66211, 0.65946, 0.65651, 0.65332, 0.65017, 0.64907, 0.65397, 0.656, 0.65749, 0.65852, 0.65914, 0.65938, 0.65926, 0.6588, 0.65801, 0.6569, 0.65548, 0.65378, 0.65181, 0.64964, 0.6475, 0.64693, 0.65034, 0.65146, 0.65214, 0.65245, 0.65241, 0.65206, 0.6514, 0.65046, 0.64926, 0.64783, 0.64627, 0.64503, 0.64603, 0.64721, 0.64784, 0.6481, 0.64804, 0.64769, 0.64707, 0.64621, 0.64515, 0.64402, 0.64355, 0.64471, 0.64512, 0.64518, 0.64496, 0.64449, 0.64381, 0.64297, 0.64228, 0.64272, 0.64309, 0.64311, 0.64287, 0.6424, 0.64178, 0.64122, 0.64142, 0.6416, 0.64149, 0.64115, 0.64066, 0.64026, 0.64039, 0.64039, 0.64015, 0.63976, 0.63944, 0.63948, 0.63937, 0.63908, 0.63876, 0.6387, 0.63858, 0.63831, 0.6381, 0.63803, 0.63786, 0.63763, 0.6375, 0.6374, 0.63721, 0.63705, 0.63694, 0.63681, 0.63665, 0.63653, 0.63643, 0.63629, 
            0.63616, 0.63606, 0.63595, 0.63583, 0.63573, 0.63563, 0.63552, 0.63542, 0.63532, 0.63523, 0.63513, 0.63504, 0.63495, 0.63486, 0.63478, 0.6347, 0.63462, 0.63454, 0.63446, 0.63438, 0.63431, 0.63424, 0.63416, 0.63409, 0.63403, 0.63396, 0.63389, 0.63383, 0.63377, 0.63371, 0.63365, 0.63359, 0.63353, 0.63347, 0.63342, 0.63336, 0.63331, 0.63326, 0.63321, 0.63316, 0.63311, 0.63306, 0.63301, 0.63297, 0.63292, 0.63288, 0.63283, 0.63279, 0.63275, 0.63271, 0.63266, 0.63262, 0.63259, 0.63255, 0.63251, 0.63247, 0.63244, 0.6324, 0.63237, 0.63233, 0.6323, 0.63226, 0.63223, 0.6322, 0.63217, 0.63214, 0.63211, 0.63208, 0.63205, 0.63202, 0.63199, 0.63196, 0.63193, 0.63191, 0.63188, 0.63185, 0.63183, 0.6318, 0.63178, 0.63175, 0.63173, 0.63171, 0.63168, 0.63166, 0.63164, 0.63161, 0.63159, 0.63157, 0.63155, 0.63153, 0.63151, 0.63149, 0.63147, 0.63145, 0.63143, 0.63141];

        this.reset();
    }

    reset() {
        // velocity is axial velocity

        this.simulation = {
            orientation: new Quaternion(1, 0, 0, 0),                // rad + no dimension + imag + real + fake + maybe + banned + [REDACTED] + alien
            altitude: 0,                                            // m
            velocity: 0,                                            // m/s
            acceleration: 0,                                        // m/s^2
            position: [0, 0, 0],                                    // m
            time: 0,                                                // s
            v0: 0,
            M: 0,
            angle: 0,
        }
    }

    initialize() {
        // TODO: calculate rocket mass
        // we don't know why this is here :((
    }

    step(dt) {
        // TODO: runge-kutta 4 that mf
        

        this.rocket.state.subcomponents.map((component) => {
            component.setState({
                v0: this.simulation.v0,
                M: this.simulation.M,
                p: this.state.p,
                aref: this.state.aref,
                dref: this.state.dref,
                angle: this.simulation.angle
            })
        })

        this.rocket.setState({
            v0: this.simulation.v0,
            M: this.simulation.M,
            p: this.state.p,
            aref: this.state.aref,
            dref: this.state.dref,
            angle: this.simulation.angle
        }) 
        
        
        let t = this.simulation.time;
        
        let thrustForce = this.rocket.motors[0].interpolateProfile(t); // currently only uses the first motor      
   
        // N
        let norm = 0.5 * this.state.p * this.simulation.velocity ** 2 * this.state.aref / 10000; // aref is originally in cm^2

        let dragForce = this.rocket.cd * norm;
        let axialDragForce = dragForce * Math.cos(this.simulation.angle); 

        let normalForce = this.rocket.cn * norm;

        let gravityForce = -9.81 * this.rocket.mass / 1000;                                  // rocket mass is originally in grams
        let axialGravityForce = gravityForce * Math.cos(this.simulation.angle);
        let normalGravityForce = gravityForce * Math.sin(this.simulation.angle);

        let force = -1 * axialDragForce + thrustForce + axialGravityForce;

        

        // none of this is right
        this.simulation.acceleration = force / this.rocket.mass * 1000;
        this.simulation.velocity += this.simulation.acceleration * dt;
        this.simulation.velocity = this.velocities[this.counter];
        this.simulation.altitude += this.simulation.velocity * dt;

        this.simulation.time += dt;

        this.simulation.M = this.simulation.velocity / this.state.mach;
        this.simulation.v0 = this.simulation.velocity;   

        //console.log(t);

        //TODO: Bruh
        if (false || Math.abs((t * 5) % 2 - 0) < 0.1) {
            console.log(`drag: ${axialDragForce}, velocity: ${this.simulation.velocity}, gravity: ${axialGravityForce}`)
        }

        console.log(`ourCD: ${this.rocket.cd} vs theirCD: ${this.axialDragCoefficients[this.counter]}, ratio: ${this.rocket.cd/this.axialDragCoefficients[this.counter]}`);

        this.counter += 1;
    }

    setState(newState) {
        for (let key in newState) {
            this.state[key] = newState[key]; 
        }
    }
}

module.exports = Simulation;