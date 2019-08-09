from math import *
# -*- coding: utf-8 -*


def vigenere(mot, cle):
    message_code=[]
    mot=mot.upper() #mot en majuscules
    cle=cle.upper()
    L=len(cle)
    i=0
    for l in mot:
        if l!=" ":
            num=ord(l)-65
            cle_i=ord(cle[i])-65
            num_code=(num+cle_i)%26
            lettre_code=chr(num_code+65)
        else : #prendre l'espace en compte
            lettre_code=" "
        i=(i+1)%L
        message_code.append(lettre_code)
    message_code="".join(message_code)
    return (message_code)

