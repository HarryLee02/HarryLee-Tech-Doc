---
sidebar_position: 1
---

# Lab 6 CTF NT213.ANTT

All the chal is web-related

![picture](/img/docs/CTF/ctf-lab-6.png)

## Slot Machine - 4 points
There is a link that contains the leaked codes for this chal

[source code](https://pastebin.com/uWc0GjUd)

```python title="chal.py" showLineNumbers
import random
from tqdm import tqdm

flag = "NT213.ATTT.2{Luck-can-not-help-u-find-the-flag-:)))}"
seed = random.randint(100_000, 999_999)
output = ""
 
seed_str = str(seed)
real_seed = 0
for char in seed_str:
    real_seed = real_seed + ord(char)**2
    real_seed = real_seed + seed
    real_seed = real_seed % 16
 
previous_char = "\0"
for char in flag:
    a =  ord(char) % 94 + 33 + real_seed % 94 + 33
    a = a % 94 + 33
    output += chr(a)
    previous_char = chr(ord(char) % 94 + 33)
 
print(output)
```

To solve this, you need to get the seed, other wise, bruteforcing is the best you can do. Since this is a web class, we need to see what the web is doing, is there any hint.

![string](/img/docs/CTF/calculateLuckyString.png)

A .txt file is returned, which contains the seed for the encrypted flag.

```json title="calculateLuckyString.txt" showLineNumbers
0:{"_value":{"seed":564490,"output":"]cA@B=Pccc=A,b{?%n|CrZ@}Bn@$npsS@rctS."}}
```

Now we need to reverse the function used for encryption.

I run the slot machine couples of time to get the lower seed number so that I dont need to find the multiplication for 94, as in the encryption function.

```python title="solve.py" showLineNumbers
output = 'agEDFATgggAE0f!C)r\"Gv^D#FrD(rtwWDvgxW2'
# output = 'CvF'

seed = 156260
seed_str = str(156260)
real_seed = 0
for char in seed_str:
    real_seed = real_seed + ord(char)**2
    real_seed = real_seed + seed
    real_seed = real_seed % 16 
    # Reverse the transformation 
flag = ""
for char in output:
    a = ord(char)-33-33-33+94# not > 94
    a = a - real_seed % 94
    if a <33:
        a += 94
    print(a)
    flag += chr(a)
print(flag)
```
## Mark Editor - 2 points


