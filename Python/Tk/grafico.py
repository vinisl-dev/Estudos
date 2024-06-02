import random
from tkinter import StringVar, Label, Tk, Entry

window = Tk()
window.geometry("400x100")
window.title("Monty hall simulation")
window.resizable(0,0)

same_choice = StringVar()
switched_choice = StringVar()
same_choice.set(0)
switched_choice.set(0)
no_sample = Entry
Label(text= "Same choice").place(x=80, y=8)
Label(text="Switched choice").place(x=80, y=8)
Label(textvariable=same_choice, font=(15)).place(x=180, y=8)
Label(textvariable=switched_choice, font=(15)).place(x=180, y=40)
no_sample.place(x=100, y=70)

def simulate(event):
    same_choice_result = 0
    switched_choice_result = 0
    samples = int(no_sample.get())
    doors = ['gold', "goat", "bed"]
    for _ in range(samples):
        simulate_doors = doors.copy()
        random.shuffle(simulate_doors)
        first_choice = random.choice(simulate_doors)
        simulate_doors.remove(first_choice)
        opened_door = (
            simulate_doors[0] if simulate_doors[0] != "gold" else simulate_doors[1]
        )
        simulate_doors.remove(opened_door)
        switched_second_choice = simulate_doors[0]
        if first_choice == "gold":
            same_choice_result += 1
            same_choice.set(same_choice_result)
        elif switched_second_choice == "gold":
            switched_choice_result += 1
            switched_choice.set(switched_choice_result)
        else:
            print("That's will never happed")
no_sample.bind("<Return>", simulate)
window.mainloop()