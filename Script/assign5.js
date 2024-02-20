

function NextButtonAction() {
    window.open('success.html');
}
var count = 0; ////////
const nextPhase = document.getElementById('nextphase');
const contactNumber = document.querySelector('#contactNumber');
nextPhase.addEventListener('click', NextButtonAction);
contactNumber.addEventListener('input', handleNextButtonState);

function handleNextButtonState() {
    if (isValidContactNumber() && count > 0) {
        nextPhase.disabled = false;
        nextPhase.style.backgroundColor = '#1dd100';
    }
}

function isValidContactNumber() {
    const contactNumberValue = contactNumber.value.trim();
    return contactNumberValue !== '' && !isNaN(contactNumberValue);
}


///////////////////////////////////////////////////////////////
var cost = 0;
var invalidCouponChecker = false;//////////////////////////
const grP = document.getElementById('grandPrize');
const disPr = document.getElementById('discountPrice');
const applyCu = document.getElementById('applyCoupon');
const inCoupon = document.getElementById('insertCoupon');
const couponInput = document.getElementById('couponInput');
const invalidCoupon = document.getElementById('invalidCoupon');
applyCu.addEventListener('click', grandTotalCounter);
function grandTotalCounter() {
    if (count == 4) {
        applyCu.removeAttribute('disabled');

        if (inCoupon.value == 'NEW15' || inCoupon.value == 'Couple 20') {
            const discount = (inCoupon.value == 'NEW15') ? 0.15 : 0.20;
            const discountAmount = cost * discount;
            grP.innerText = cost - discountAmount;
            const dis = document.createElement('p');
            dis.textContent = 'Discount';
            const amount = document.createElement('p');
            amount.textContent = 'BDT ' + discountAmount;
            disPr.appendChild(dis);
            disPr.appendChild(amount);
            disPr.classList.remove('hidden');        
            couponInput.classList.add('hidden');   
            if (invalidCouponChecker) {
                invalidCoupon.classList.add('hidden');
            }
        } else if (inCoupon.value !== '') {
            
            alert('Invalid coupon code!');
        }
    }
}



const totalseat = 40;
const price = 550;////////////////////////////////////////
var checker = false;
var tempArr = [];
const className = 'Economy';
const seatButtons = document.querySelectorAll('.seat');
const ticketInfo = document.querySelector('.table tbody');
const ticketcounter = document.getElementById('ticketCounterCount');
const maxAlert = document.getElementById('maxAlert');
const freeseat = document.getElementById('freeSeatLeft');
const totalP = document.getElementById('totalPrice');

for (let i = 1; i < seatButtons.length; i++) {
    const seat = seatButtons[i];
    seat.addEventListener('click', function(event) {
        const seatId = seat.id;

        if (count < 4 && !tempArr.includes(seatId)) {
            count++;
            cost += price;
            tempArr.push(seatId);
            ticketcounter.innerText = count;
            const row = document.createElement('tr');

            const seatD = document.createElement('td');
            seatD.textContent = seatId;

            const classD = document.createElement('td');
            classD.textContent = className;

            const priceD = document.createElement('td');
            priceD.textContent = price;

            row.appendChild(seatD);
            row.appendChild(classD);
            row.appendChild(priceD);

            ticketInfo.appendChild(row);
            freeseat.textContent = totalseat - count;

            totalP.textContent = cost;
            grP.textContent = cost;

            seat.style.backgroundColor = '#1dd100';
            seat.style.color = 'white';

            event.stopPropagation();
            handleNextButtonState();
            grandTotalCounter();
        } else if (tempArr.includes(seatId)) {
            event.stopPropagation();
        } else if (count >= 4) {
            alert('Sorry, you can only buy 4 ticket.')
        }
    });
}







////////////////////////////
