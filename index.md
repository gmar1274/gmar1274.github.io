{:.mycenter}
[<i class="fab fa-linkedin fa-border"></i> LinkedIn](https://www.linkedin.com/in/gabrielnm) | [<i class="fab fa-github-square  fa-border"></i> GitHub](https://www.github.com/gmar1274) | [<i class="fas fa-file-pdf fa-border"></i> Resume](/docs/resume.pdf)

{:.myimage-center .show-on-scroll}
![Image of Gabriel](/images/gabriel.jpg)

<style>
   th,td{
      font-weight: 100;
      vertical-align: top;
   }
   body{
      background-color: white;
   }
   pre{
      padding:1em;
      margin: .25em;
   }
   header>h1{
        border-radius: .2em;
        display: inline-block;
        font-size: 2.2em;
        color: #96cdff;
        text-shadow: rgba(27, 0, 189, 0.69) 0 2px 0;
    }
    header > p{
        text-shadow: 2px 2px 8px #fce059;
        font-size: 1em;
        color: white;
    }
    .mycenter {
        text-align:center;
        font-size: 2.5em;
        font-weight: bold;
        border-bottom: 0px;
    }
    .mycenter td {
        text-align: center;
        padding: 5px 10px;
        border-bottom: 1px solid #aaa;
    }
    .mycenter tr:nth-child(odd){ 
        text-align: center;
        background-color: white;
    }
    .myimage-center{
        text-align:center;
        height: "25%";
        width: "25%";
    }
    header{
        background-image: url('/images/mandel.jpg');
        border-bottom: 0px;
        padding: 4em 0 4em 1em;
    }
    header ul{
        top: 4em;
    }
    h2 {
        border-left: 5px solid #069;
        padding: .25em;
        margin-top: 2.5em;
    }
   h3 {
        padding: .25em;
        margin-top: .5em;
    }
    td{
      vertical-align: top;
   }
    /*  Define the background color for all the ODD background rows  */
    tr:nth-child(odd){ 
        text-align: center;
        background: #fbfcff;
    }
    /*  Define the background color for all the EVEN background rows  */
    tr:nth-child(even){
        background: #edf5ff;
        text-align: center;
    }
    .wrapper{
        width: 80%;
        margin: 0 auto;
        background-color: white;
        border-radius: 8px;
    }
   img{
      vertical-align: middle;
   }
   is-visible {
      opacity: 1;
      transition: opacity .5s .25s ease-out;
   }
    @media print, screen and (max-width: 740px){
        .wrapper {
            border-radius: 0;
            box-shadow: none;
            width: 100%;
        }
        header{
           padding: .9em;
        }
        pre{
            padding:0px;
            margin: .25em;
            width: 100%;
         }
        table{
            width:100%;
            margin: .25em;
            padding:0px;
        }
      th,td{
         padding:.25em;   
      }
      .myimage-center{
           height: "50%";
           width: "50%";
       }
      .mycenter {
           font-size: 1.5em;
           padding:.25em;   
       }
      .fa-border {
            padding:0em;
       }
   body{
    background-color: white;
    color: black;
   }
   p{
      padding: .25em;
      margin: .5em; 
      font-size: 12pt;
      font-family: Bookman;
   }
</style>
{: .show-on-scroll}
## About Me  <i class="fas fa-code"></i>
---
{: .show-on-scroll}
<i class="fas fa-quote-left fa-2x fa-pull-left"></i>
Welcome to my personal website! My name is Gabriel, and I am first in my family to graduate with a STEM degree. I am a professional JavaScript developer. I was born in Pomona, CA in 1993, taught myself how to code in high school, and been developing applications on all platforms ever since. When I am not coding, I am reading math textbooks (yes really ... :nerd_face: ) and researching new platforms and technologies. I am currently open to discovering new opportunities that would marry my two passions for coding and Information Technology.

As a former baseball player, I understand the value and importance of teamwork. That is why I value a healthy team environment as my number one criterion above all else. 

Outside of work, (and outside of coding for fun) I enjoy going out and listening to live music, exploring the city for new cuisines, discovering new breweries, and just recently got into fitness (running and hiking) to balance out the former. <i class="fas fa-quote-right fa-2x fa-pull-right"></i>


{: .show-on-scroll}
## Education  <i class="fas fa-user-graduate"></i>
---

2018--present | **M.S.** | **Applied Mathematics**, <br/> *California State Polytechnic University, Pomona.* | **Relevant Coursework:** <br/> Mathematical Modeling | 
|---------|
2011--2016 | **B.S** | **Computer Science**<br/> (ABET Accredited), *California State Polytechnic University, Pomona.* | **Relevant Coursework:** <br/> Artificial Intelligence, Computer Networks, Database Systems, Programming Graphical User Interfaces (GUI), Computer Organization and Assembly Programming, Data Structures & Algorithms, Design and Analysis of Algorithms, Numerical Methods, Graph Theory | 
|---------|
2011--2016 | **Minor** | **Physics**,<br/> *California State Polytechnic University, Pomona.*| **Relevant Coursework:** <br/> Biophysics, Computational Physics (python programming using NumPy and SciPy modules), Intro to Electromagnetic Radiation and Special Relativity, Intro to Quantum Physics, General Physics, Differential Equations, Multivariable Calculus |

{: .show-on-scroll}
## My Projects  <i class="fas fa-laptop-code"></i>
---
{: #medicine-reminder .show-on-scroll}
### Android Mobile App - Medicine Reminder [![logo](https://github.com/gmar1274/MedicineReminder/blob/master/app/src/main/ic_launcher-web.png?raw=true){:height="50px" width="50px vertical-align:middle"} View <i class="fab fa-github"></i>](https://github.com/gmar1274/MedicineReminder)
~~~java
- [x] Project goal was to create a really straightforward app to keep a history of all medications consumed.
- [x] What I needed was a simple app to keep a record of the medications I was taking and when I last took it. (I had my tonsils removed Oct. 7th 2019)
- [x] This is an offline app, however it implements Android's Room persistence library which provides an abstraction layer over SQLite to allow for more robust database access while harnessing the full power of SQLite.
- [x] I also added Google's AdMob so that I can add an advertising banner to my app for revune potential.
- [x] This app utillizes Font Awesome and skydove's ColorPickerView (https://github.com/skydoves/ColorPickerView).
- [ ] Google Play Store link: *upcoming*
- [ ] Next step is to implement a *reminding* function to alert the user when it's time to take the next dosage of medication.
~~~
{: #tictactoe .show-on-scroll}
### Android TicTacToe Mobile Development [View <i class="fab fa-github"></i>](https://github.com/gmar1274/Mobile_AI_TicTacToe/wiki)
```java
- [x] Project goal was to become familiar with native Android animation libraries and to demonstrate proficiency in Android native mobile development.

- [x] Implemented native animation libraries and media player.

- [x] App developed using Java.

- [x] Implemented one of the first Artificial Intelligence search algorithms called MinMax with alpha-beta pruning to reduce the runtime search efficiency.

- [x] Third party API's consumed include Google's Firebase NoSQL and AdMob.
```

{: #android-ios .show-on-scroll}
### Android & iOS Mobile Development  [View <i class="fab fa-github"></i>](https://github.com/gmar1274/Android-Firebase)
```swift
- [x] Project goal was to recreate an app similar to Supercut's real-time reservation system.

- [x] Project to demonstrate proficiency with the Android and iOS SDK native mobile development,life cycle, and Model View Controller architecture (MVC).

- [x] Project functionality similar to Supercut's realtime reservation system.

- [x] Android developed using Java and iOS app developed using swift.

- [x] Technologies used: Android Studio and Xcode IDE, DreamFactory REST API Platform for creating custom web APIs, JSON for encoding/  decoding microservices, MySQL, Google's Firebase NoSQL, and Amazon Web Services (AWS) EC2 instance to host the MySQL database.
```
{: #wpf .show-on-scroll} 
### C\# Windows Presentation Foundation (WPF) Development [View <i class="fab fa-github"></i>](https://github.com/gmar1274/FTNTransport)
```c#
- [x] Project goal was to create a WPF administrative inventory management dashboard  application for the independent trucking industry.

- [x] Portfolio project to demonstrate knowledge using the .NET framework and Model View ViewModel Architecture (MVVM).

- [x] Developed an administrative inventory management dashboard system GUI.

- [x] App written in C#.

- [x] Technologies used: Microsoft Visual Studio IDE, XAML, MYSQL, PHP for custom web services, JSON for encoding/decoding PHP web services, and Amazon Web Services (AWS) EC2 instance for hosting the database and PHP web services.
```
{: #python .show-on-scroll}
### Python Modeling - Senior Class Project Computational Physics PHY 409 [View <i class="fab fa-github"></i>](https://github.com/gmar1274/ComputationalBiologyPhy409Project)
```python
- [x] Project goal was to model biological growth using the Lindenmayer System.

- [x] Went above and beyond class requirements. Goal was to recreate research publication that models botanical life using the Lindenmayer System.

- [x] Class project that demonstrate proficiency in Python and computational physics modeling.

- [x] Recreated a journal publication to model botanical structure using the Lindenmayer System.

- [x] Went above and beyond. Developed a GUI using the Tkinter module.

- [x] Used SciPy and NumPy modules for computing and plotting results of the research publication.

- [x] Technologies used: Eclipse IDE with the PyDev plugin for development.
```

{: #raspberry-pi .show-on-scroll}
### Raspberry Pi - OpenVPN Server <i class="fab fa-raspberry-pi"></i>
```bash
- [x] Project goal was to host my own secure virtual private network (VPN) server		

- [x] Successfully created and currently maintaining a Virtual Private Network (VPN) for secured and safe web browsing on my Raspberry Pi.		

- [x] Registered with No-IP (free dynamic DNS service) so that my OpenVPN server being hosted at home from my ISP can be resolved when doing a DNS lookup.		

- [x] Engineered a layered home network and configured my firewall from my main ISP provided router and created a extra sub net using my  TP-Link router for a separate controlled network testing environment.		

- [x] Configured my TP-Link's firmware and installed OpenWrt on the device. 

- [ ] Next step is to buy a mini USB travel router and install OpenWrt along with OpenVpn so that I can connect all my extra devices to my travel router without needing to generate individual certificates and keys for each client device.
```
{: #misc .show-on-scroll}
## Miscellaneous <i class="fas fa-cogs fa-spin"></i>
---

| **Hobbies** <i class="fas fa-gamepad"></i> |
| live music <i class="fas fa-icons"></i> | running <i class="fas fa-running"></i> | hiking <i class="fas fa-hiking"></i> |
| reading math books :nerd_face: | craft beer <i class="fas fa-beer"></i> | food festivals <i class="fas fa-utensils"></i> | Going to Dodger games :baseball: |
| **TV shows** <i class="fas fa-tv"></i> |
| MasterChef | Ink Master | Shark Tank | 
| It's Always Sunny in Philadelphia | Workaholics | Rick and Morty |
