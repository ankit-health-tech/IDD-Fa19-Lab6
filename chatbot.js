Last login: Sat Oct 12 16:20:09 on console
(base) dhcp-nyc-868:~ ankitmalhan$ ping 10.148.133.216
PING 10.148.133.216 (10.148.133.216): 56 data bytes
64 bytes from 10.148.133.216: icmp_seq=0 ttl=64 time=18.276 ms
64 bytes from 10.148.133.216: icmp_seq=1 ttl=64 time=8.992 ms
64 bytes from 10.148.133.216: icmp_seq=2 ttl=64 time=7.390 ms
64 bytes from 10.148.133.216: icmp_seq=3 ttl=64 time=7.788 ms
64 bytes from 10.148.133.216: icmp_seq=4 ttl=64 time=8.025 ms
64 bytes from 10.148.133.216: icmp_seq=5 ttl=64 time=9.232 ms
64 bytes from 10.148.133.216: icmp_seq=6 ttl=64 time=7.295 ms
64 bytes from 10.148.133.216: icmp_seq=7 ttl=64 time=9.100 ms
64 bytes from 10.148.133.216: icmp_seq=8 ttl=64 time=13.021 ms
64 bytes from 10.148.133.216: icmp_seq=9 ttl=64 time=7.551 ms
^[64 bytes from 10.148.133.216: icmp_seq=10 ttl=64 time=9.519 ms
64 bytes from 10.148.133.216: icmp_seq=11 ttl=64 time=7.998 ms
64 bytes from 10.148.133.216: icmp_seq=12 ttl=64 time=120.470 ms
64 bytes from 10.148.133.216: icmp_seq=13 ttl=64 time=10.912 ms
64 bytes from 10.148.133.216: icmp_seq=14 ttl=64 time=9.578 ms
^[c64 bytes from 10.148.133.216: icmp_seq=15 ttl=64 time=8.512 ms
64 bytes from 10.148.133.216: icmp_seq=16 ttl=64 time=11.259 ms
64 bytes from 10.148.133.216: icmp_seq=17 ttl=64 time=8.381 ms
64 bytes from 10.148.133.216: icmp_seq=18 ttl=64 time=9.057 ms
64 bytes from 10.148.133.216: icmp_seq=19 ttl=64 time=6.743 ms
64 bytes from 10.148.133.216: icmp_seq=20 ttl=64 time=6.872 ms
64 bytes from 10.148.133.216: icmp_seq=21 ttl=64 time=7.606 ms
64 bytes from 10.148.133.216: icmp_seq=22 ttl=64 time=10.696 ms
64 bytes from 10.148.133.216: icmp_seq=23 ttl=64 time=8.843 ms
^C
--- 10.148.133.216 ping statistics ---
24 packets transmitted, 24 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 6.743/13.880/120.470/22.353 ms
(base) dhcp-nyc-868:~ ankitmalhan$ ssh pi@10.148.133.216
The authenticity of host '10.148.133.216 (10.148.133.216)' can't be established.
ECDSA key fingerprint is SHA256:NXRt8ZIAooDQVJK3MCJPZuIqbpyt6QAXAQKDbzFfb8s.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '10.148.133.216' (ECDSA) to the list of known hosts.
pi@10.148.133.216's password: 
Linux ixe129 4.19.66-v7+ #1253 SMP Thu Aug 15 11:49:46 BST 2019 armv7l

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Mon Oct  7 13:43:27 2019 from 192.168.0.4

SSH is enabled and the default password for the 'pi' user has not been changed.
This is a security risk - please login as the 'pi' user and type 'passwd' to set a new password.

pi@ixe129:~ $ malhan
-bash: malhan: command not found
pi@ixe129:~ $ passwd
Changing password for pi.
(current) UNIX password: 
Enter new UNIX password: 
Retype new UNIX password: 
Bad: new password is too simple
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
pi@ixe129:~ $ cd ~
pi@ixe129:~ $ git clone https://github.com/ankit-health-tech/IDD-Fa19-Lab6
Cloning into 'IDD-Fa19-Lab6'...
remote: Enumerating objects: 857, done.
remote: Total 857 (delta 0), reused 0 (delta 0), pack-reused 857
Receiving objects: 100% (857/857), 2.40 MiB | 1.03 MiB/s, done.
Resolving deltas: 100% (171/171), done.
pi@ixe129:~ $ ls
data       helloYou       node_opencv_test      Pictures             scripts
Desktop    IDD-Fa19-Lab6  oldconffiles          pi-object-detection  sketchbook
Documents  MagPi          opencv-3.4.1          Public               Templates
Downloads  Music          opencv_contrib-3.4.1  python_games         Videos
pi@ixe129:~ $ cd IDD-Fa19-Lab6
pi@ixe129:~/IDD-Fa19-Lab6 $ npm install

> uws@0.14.5 install /home/pi/IDD-Fa19-Lab6/node_modules/uws
> node-gyp rebuild > build_log.txt 2>&1 || exit 0


0
npm WARN Simple-ChatBot@0.0.1 No repository field.

added 82 packages from 69 contributors and audited 201 packages in 52.633s
found 0 vulnerabilities

pi@ixe129:~/IDD-Fa19-Lab6 $ 
pi@ixe129:~/IDD-Fa19-Lab6 $ 0
-bash: 0: command not found
pi@ixe129:~/IDD-Fa19-Lab6 $ node chatServer.js
listening on *:8000
a new user connected
Ankit
65
mars[
not yellow
yup
no
no
yes
mars
user disconnected
^[[A
^C
pi@ixe129:~/IDD-Fa19-Lab6 $ nano chatServer.js

  GNU nano 2.7.4                                                                               File: chatServer.js                                                                                Modified  


  /// These are the main statments that make up the conversation.
  if (questionNum == 0) {
    answer = 'Hello ' + input + '!, I told your mom '+ input +'bot is a better name but I guess they know best :-/'; // output response
    waitTime = 5000;
    question = 'How old are you?'; // load next question
  } else if (questionNum == 1) {
    answer = 'Really, ' + input + ' years old? I remember when you were a little baby barfing on everybody!'; // output response
    waitTime = 5000;
    question = 'So what you upto at this late hour? Are you heading out?'; // load next question
  } else if (questionNum == 2) {
        if (input.toLowerCase() === 'no' ||input === 0){
                answer = 'Perfect! Now head back upstairs and aunty will make her famous chicken soup for you! Yum Yum!';
                waitTime = 5000;
        }else if (input.toLowerCase === 'yes' || input ===1){
                questionNum = 3;
        } 

  } else if (questionNum == 3) {
    answer = 'Ok, fine you can go out';
    waitTime = 5000;
    question = 'What zip-code are you heading out to?'; // load next question
  } else if (questionNum == 4) {
        








    if (input.toLowerCase() === 'yes' || input === 1) {
      answer = 'Perfect!';
      waitTime = 5000;
      question = 'Whats your favorite place?';
    } else if (input.toLowerCase() === 'no' || input === 0) {
      socket.emit('changeFont', 'white'); /// we really should look up the inverse of what we said befor.
      answer = ''
      question = 'How about now?';
      waitTime = 0;
      questionNum--; // Here we go back in the question number this can end up in a loop
    } else {
      question = 'Can you still read the font?'; // load next question
      answer = 'I did not understand you. Could you please answer "yes" or "no"?'
      questionNum--;
      waitTime = 5000;
    }
    // load next question

^G Get Help      ^O Write Out     ^W Where Is      ^K Cut Text      ^J Justify       ^C Cur Pos       ^Y Prev Page     M-\ First Line   M-W WhereIs Next ^^ Mark Text     M-} Indent Text  M-U Undo
^X Exit          ^R Read File     ^\ Replace       ^U Uncut Text    ^T To Spell      ^_ Go To Line    ^V Next Page     M-/ Last Line    M-] To Bracket   M-^ Copy Text    M-{ Unindent TextM-E Redo
