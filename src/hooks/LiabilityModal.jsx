import React from 'react';

const LiabilityModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-center justify-center ">
      <div className="bg-white p-6 rounded shadow-lg max-w-[50rem] w-full max-h-[70vh] overflow-y-auto ">
        <h2 className="text-xl font-bold mb-4">RELEASE OF LIABILITY</h2>
        <p className="mb-4">
          I have applied to participate in the tour appointed on the website Montaraz Outdoors &amp; Culture. I am participating in this trip with the
          knowledge of the numerous risks and dangers involved including but not limited to: negligence in any manner on the part of Montaraz
          Outdoors &amp; Culture including, without limitation, negligence in the conduct or arrangement of the trip in any respect from inception to
          completion, negligence with regard to bicycle selection or maintenance, the use, installation or maintenance of any optional or add-on
          equipment such as pedals for cycle tours or other equipment for hiking and multi adventure tours and etc., in the maintenance or operation of
          any van or other motor vehicle utilized to transport passengers, etc.; acts of God or force majeure, acts of war or civil unrest, insurrection or
          revolt, acts of government, strikes or other labor activities; physical exertion for which I am not prepared; negligent or reckless cycling by the
          participant or others; inability to properly operate a bicycle; forces of nature; weather conditions; transportation failures or the failure of any
          transportation mechanism to arrive or depart timely or safely, whether by plane, train, auto, boat, canoe, kayak, bicycle, ski, horseback or
          other animal, by foot, or by any other conveyance; dangers associated with swimming or jumping from boats including the possibility of hitting
          a boat, an object or a person while doing so, being caught in rough or rapidly moving waters, etc., consumption of alcoholic beverages,
          medications or other substances whether or not prescribed; risks associated with food, food allergies or impure water; terrorism or the threat
          thereof; criminal activity; bites from or dangers associated with wild or other animals, pests or insects; negligence or willful misconduct by third
          parties; breakdown or failure of bicycles or other equipment; financial default of any supplier; high altitude; accident, allergic reaction or illness
          without access to means of rapid evacuation or availability of medical supplies or services; the adequacy of medical attention once provided;
          epidemics or the threat thereof including, but not limited to, exposure to COVID-19 by any means of transmission; stolen, lost, or misplaced
          luggage or property; and theft or break-ins into vans, lodging rooms or elsewhere.
        </p>
        <p className="mb-4">
          I acknowledge that the enjoyment and excitement of adventure travel are derived in part from the inherent risks incurred by travel and activity
          beyond the accepted safety of life at home or work.
        </p>
        <p className="mb-4">
          I AGREE TO BE RESPONSIBLE FOR MY WELFARE AND ACCEPT ANY AND ALL RISKS OF DELAY, UNANTICIPATED EVENTS, INCONVENIENCE, ILLNESS,
          INJURY, EMOTIONAL TRAUMA OR DEATH.
        </p>
        <p className="mb-4">
           I acknowledge that the cost of all Montaraz Outdoors & Culture trips is based upon trip participants executing this Release agreement.
        </p>
        <p className="mb-4">
          I agree that this Agreement shall be legally binding upon me personally, all members of my family and all minors traveling with me, and their
          heirs, successors, assigns, and legal representatives, it being my intention fully to assume all the risks associated with this trip and to release
          Montaraz Outdoors & Culture from any liability to the maximum extent permitted by law.
        </p>
        <p className="mb-4">
          I understand that Montaraz Outdoors & Culture reserves the right to take photographic or film records of any of its trips and agree that
          Montaraz Outdoors & Culture may use any such photographic or film records for promotional and/or commercial purposes, as well as approve
          such use by third parties with whom Montaraz Outdoors & Culture may engage in joint marketing, without any remuneration to me. I assign to
          Montaraz Outdoors & Culture all rights, titles, and interests I may have in or to any media in which my name or likeness might appear.
        </p>
        <p className="mb-4">
          I agree to follow all written and verbal rules of safety presented to me by Montaraz Outdoors & Culture. I understand that Montaraz Outdoors
          &amp; Culture reserves the right to refuse as a trip participant or remove from a trip, without refund, any person it judges to be incapable of
          meeting the rigors and requirements of participating in the activities, who it judges is abusive to other trip participants, leaders or third parties,
          or who it determines detracts from the enjoyment of the trip by others. Montaraz Outdoors & Culture reserves the right to make route, hotel,
          itinerary, and trip modifications as required or desirable to improve the trip quality and/or to accommodate the comfort and well-being of
          guests.
        </p>
        <p className="mb-4">
          Participation in tour activities of the company Montaraz Outdoors & Culture should only be considered if you are properly trained and in
          proper physical and medical condition to undertake cycle tour and hiking tours or multi adventure activities. You are responsible for
          determining whether you can meet the physical demands of the tour and your health and well-being throughout the tour remain your
          responsibility. If you have any doubts as to your health and fitness to participate, you should consult the company or/and a medical doctor
          before booking.
        </p>
        <p className="mb-4">
          You acknowledge that cycle and hiking tours or multi adventurous are strenuous activities and that there are inherent dangers, risks, and
          certain elements of unpredictability associated with participating in the tour. You acknowledge and accept that these activities are a physically
          demanding sport carrying with it considerable risk of injury and potential danger of accident or collision which may result in injury. You assume
          responsibility and liability for all associated risks of the tour.
        </p>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>I. </p>
            <p>that he/she has been duly informed by the company Montaraz Outdoors & Culture in their compressible language of the
            specifications of the activities in which he/she’s going to participate and about the physical conditions needed for such participation.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>II. </p>
            <p>that he/she knows, understands, and accepts the rules stated for the different activities and that he/she submits him/herself to the
            authority of the direction and/or discipline of the organization.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>III. </p>
            <p>that he/she has been clearly and sufficiently informed about the risks of the different activities about the qualifications of the
            guided and about the safety measures to be taken by the organization during the activities.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>IV. </p>
            <p>that he/she doesn’t suffer any illness, disability, or medical restriction for the practice of these activities.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>V. </p>
            <p>the client acknowledges that he/she is in good physical and mental conditions suitable for such activity, not having any physical or
            mental illness that prevents or undermines the realization of such activity.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>VI. </p>
            <p>that he/she assumes voluntarily the risks of the sport and/or adventure’s activity and, therefore, relieves the organization of any
              damage or prejudice that he/she may suffer during the activity. Such exemption does not include the damages or prejudices caused
              by the negligence of the organization.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>VII. </p>
            <p>that you are responsible for compliance with all laws of the country or countries in which the tour operates, including all traffic
            regulations and drug regulations. It is your responsibility to ensure you are aware of these laws and regulations.</p>
        </div>
        <p className="mb-4 font-bold">
          The non-fulfillment of any of these mentioned conditions below shall cause the immediate expulsion of our activities.
        </p>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>I. </p>
            <p>at all times the participant shall strictly follow the instructions and itinerary established by the guide/s.</p>
        </div><div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>II. </p>
            <p>at all times the participant must cycle with both hands always resting on the handlebar and is warned of its danger during cycle
            tours.</p>
        </div><div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>III. </p>
            <p>it is compulsory to wear a helmet always when the activity takes place during cycle tours.</p>
        </div><div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>IV. </p>
            <p>to ensure safety and protection Montaraz Outdoors & Culture requires a European standard helmet to be worn at all times while
            riding a Bicycle Tour.</p>
        </div><div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>V. </p>
            <p>it is forbidden to overtake the guides and carry out actions with the bicycle that endanger their safety or during a hiking activity.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>VI. </p>
            <p>the client understands and accepts the rule of not doing the activity under the influence of alcohol and/or drugs. Participation under
            the influence of alcohol and/or drugs is completely forbidden. The intake of such substances before or during the activity is explicitly
            forbidden. In this case, the organization shall not be responsible for damages resulting from this action, also declining any legal
            liability arising therefrom.</p>
        </div>
        <p className="mb-4 font-bold">
          Insurance and booking conditions.
        </p>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>I. </p>
            <p>the client needs to take adequate valid travel insurance at their own cost to book the tour and ensure they have read and
               understood the full terms and conditions of your travel insurance policy to ensure that you are covered for all activities you intend
               to undertake during the trip.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>II. </p>
            <p>the client has to deal directly with the insurance company in case of settlement of any claim.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>III. </p>
            <p>the full payment must be received by procedures laid down under Payment Terms. If not paid in time, the company reserves the
              right to cancel the booking with consequent loss of deposit and apply the scale of cancellation charges as mentioned in the
              cancellation policy.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>VI. </p>
            <p>the minimum number of participants; all offered tours will take place at a minimum number of participants, if this number is not
              reached, the company may cancel the trip until 45 days before its starting date and he/she will be entitled to a full refund of the
              total trip price for multi-day tours.</p>
        </div>
        
        <p className="mb-4 font-bold">
          Others
        </p>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>I. </p>
            <p>the company shall not be responsible and /or liable for any damages caused to the client due to reasons beyond the control of the
            company.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>II. </p>
            <p>the company shall not be responsible and/or liable for the loss of baggage or personal belongings caused to the client due to
            reasons beyond the control of the company.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>III. </p>
            <p>in the case where a client along with his family is compelled to discontinue any kind of tour organized by Montaraz Outdoors &amp;
                Culture due to any reason whatsoever including illness, death, or loss of any travel documents. No claim shall be entertained for a
                refund of unutilized services. Even if a client is unable to reach the place of commencement due to any reason whatsoever including
                loss of baggage or loss of travel documents, his booking shall be treated as cancellation and 100% cancellation charges will be
                charged.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>IV. </p>
            <p>the company shall, in no circumstances whatsoever be liable to the client or any person traveling with him/her for any death,
              personal injury, sickness, accident, loss, delay, discomfort, increased expenses, consequential loss, and/or damage, or any kind of
              theft, howsoever caused.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>V. </p>
            <p>the company reserves the right to withdraw participation of any client whose behavior is deemed likely to affect the smooth
              operation of the tour or adversely affect the enjoyment or safety of other participants and shall be under no liability to any such
              person.</p>
        </div>
        <div className='mb-4 flex flex-row gap-4'>
            <p className='font-bold min-w-5'>VI. </p>
            <p>personal data the company holds will be deleted after any tour unless he/she wants to receive information about other or new
            activities, the company will save their phone number and e-mail address, and the other personal data provided will be deleted.</p>
        </div>

        <p className="mb-4 font-bold">
          Release of liability form.
        </p>
        <p className='mb-4'>The clients are required to complete and sign our release of liability form and understand the full terms and conditions of the provided tour.
          Signatures are required before pre-reservation. We're unable to allow travelers to participate in any aspect of a Montaraz Outdoors & Culture
          tour without a signed release form.</p>
        <p className='mb-4'>I HAVE CAREFULLY READ THIS LIABILITY RELEASE FORM AGREEMENT AND FULLY UNDERSTAND ITS CONTENTS.</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LiabilityModal;