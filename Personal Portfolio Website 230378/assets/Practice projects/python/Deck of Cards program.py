# Deck of Cards program
import random


class Card:
    def __init__(self, suit, number):
        self._suit = suit
        self._number = number

    def __repr__(self):
        return self._number + " of " + self._suit

    @property
    def suit(self):
        return self._suit

    @suit.setter
    def suit(self, suit):
        if suit in ["hearts", "clubs", "diamonds", "spades"]:
            self._suit = suit.upper()
        else:
            print("That's not a suit!")

    @property
    def number(self):
        return self._number

    @number.setter
    def number(self, number):
        if number in ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]:
            self._number = number.upper()
        else:
            print("Please, enter a number from 2 till 10 or J,Q,K,A!")
#  challenge aces high? (step 6)
#    @property def picture_cards(self): return int(self)


class Deck:
    def __init__(self):
        self._cards = []
        self.populate()
        print("Deck = " + str(self._cards))

    def populate(self):
        suits = ["hearts", "clubs", "diamonds", "spades"]
        numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
        # numbers = [str(n) for n in range(2,11)] + ["J", "Q", "K", "A"]
        self._cards = [Card(s, n) for s in suits for n in numbers]

    def show(self):
        for cards in self._cards:
            cards.show()
        my_deck.show()

    def shuffle(self):
        for i in range(len(self._cards) - 1, 0, -1):
            r = random.randint(0, i)
            self._cards[i], self._cards[r] = self._cards[r], self._cards[i]
        print("Shuffled Deck = " + str(self._cards))

    def draw_card(self):
        return self._cards.pop()
# Step 8
# Add a method to check whether a particular card is present in the deck or not.
# Add a deal() method to deal cards from the deck. How many cards will you deal to how many players?
# Could you create a Hand class to model the cards stored in a player’s hand?


my_deck = Deck()
my_deck.shuffle()

card = my_deck.draw_card()
print("Card Drawn: " + str(card))