
def cesar_chiffre_nb(x,k):
    
    return (x+k)%26


def chiffre_cesar(mot,k):#code le message
    message_code=[]
    mot=mot.upper() #passer le mot en majuscules
    for lettre in mot:
        if lettre!=" ":
            nb=ord(lettre)-65
            nb_crypte=cesar_chiffre_nb(nb,k)
            lettre_crypte=chr(nb_crypte+65)
        else : #pour laisser les espaces
            lettre_crypte=" "
        message_code.append(lettre_crypte)
    message_code="".join(message_code)
    return(message_code)
    
def cesar(mot): #pour casser le nombre de cesar (on regarde quand le message est lisible
    for k in range (26):
        print(chiffre_cesar(mot,-k))
   
