
ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

def IC(texte) :
    occ = { }
    n = len(texte)
    for car in texte:
         if car in occ:
             occ[car] = occ[car] + 1
         else: occ[car] = 1
    ic = 0.0
    for car in occ.keys():
        ic += occ[car]*(occ[car] - 1)/n/(n-1)
    return ic


def decal(car, d) :
    return chr((ord(car) - ord('A') + d) % 26 + ord('A'))

def convertCarCode(car) :
     return ord(car) - ord('A')

def cesar(texte, d) :
    texteDecale = ''
    for car in texte :
        texteDecale = texteDecale + decal(car, d)
    return texteDecale

def longueurCle(texte) :
    distances = []
    n = len(texte)
    for lgsubstr in range(4, 10) :
        for i in range(0, n - lgsubstr) :
            sc = texte[i : i + lgsubstr]
            j = texte[i+1 :].find(sc) + 1
            if j > 0 : distances.append(j)
    nbMax = 0
    for lg in range(5,20) :
        nb = 0
        for d in distances :
            if d % lg == 0 :
                 nb = nb + 1
            if nb >= nbMax :
                nbMax = nb
                lgCle = lg
    return lgCle

def rechercheCle(texte, lgCle) :
    texte0 = texte[0:len(texte):lgCle]
    decalages = [0]
    for k in range(1, lgCle) :
        IcMax = 0
        decalage = -1
        textek = texte[k:len(texte):lgCle]

        for d in range(0,26) :
            Ic = IC(texte0 + cesar(textek, d))
            if Ic > IcMax :
                IcMax = Ic
                decalage = d
        decalages.append(decalage)
    print (decalages)
    occ = { }
    for i in range(0, len(texte)) :
        car = cesar(texte[i], decalages[i % lgCle])
        if car in occ:
            occ[car] = occ[car] + 1
        else: occ[car] = 1
    max = 0

    for car in occ.keys():
        if occ[car] > max :
             max = occ[car]
             carE = car

    delta = (26 + ord(carE) - ord('E') ) % 26
    print(carE, delta)
    cle = ''
    for d in decalages :
        cle = cle + ALPHABET[(delta - d) % 26]
        print(cle)
    return cle

def decrypte(texte, cle) :
    lgCle = len(cle)
    clair = ''
    for i in range(0, len(texte)) :
        code = (convertCarCode(texte[i]) - convertCarCode(cle[i % lgCle])) % 26
        clair = clair + ALPHABET[code]
        print(code)
    return clair

