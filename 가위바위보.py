import random

def ans(hum,com):
    if(hum=="가위"):
        if(com==1):
            print("비겼습니다.")
        elif(com==2):
            print("졌습니다.")
        elif(com==3):
            print("이겼습니다.")

    if(hum=="바위"):
        if(com==1):
            print("이겼습니다.")
        elif(com==2):
            print("비겼습니다.")
        elif(com==3):
            print("졌습니다.")

    if(hum=="보자기"):
        if(com==1):
            print("졌습니다..")
        elif(com==2):
            print("이겼습니다.")
        elif(com==3):
            print("비겼습니다.")

    if(com==1):
        com="가위"
    elif(com==2):
        com="바위"
    elif(com==3):
        com="보자기"
    print("컴퓨터가 낸 것:",com)
    
    print("사용자가 낸 것:",hum)

hum=input("가위 바위 보자기 중에 하나를 선택하세요.")
com=random.randrange(1,4);  # 1: 가위, 2: 바위, 3: 보자기
ans(hum,com)
