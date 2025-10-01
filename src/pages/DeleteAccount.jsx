import React from 'react';

const DeleteAccount = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Delete Account
        </h1>
        <p className="text-gray-700 mb-8">Last updated: September 30, 2025</p>

        <div className="space-y-6 text-gray-700">
          <p>
            You can request to delete your Fasa account and all personal data
            stored on our platform. Once your account is deleted, this action is{' '}
            <span className="font-semibold">irreversible</span> and all your
            information will be permanently removed.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            How to Delete Your Account
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Log in to your account via the Fasa app.</li>
            <li>Go to your account settings and select "Delete My Account".</li>
            <li>
              Confirm your decision. You will receive a confirmation email.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900">
            Processing Time
          </h2>
          <p>
            Complete deletion of your account may take up to{' '}
            <span className="font-semibold">30 days</span> after the request.
            During this time, your data will no longer be accessible to you or
            other users.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            Questions or Support
          </h2>
          <p>
            If you have any questions or experience issues deleting your
            account, please contact our support team at{' '}
            <a
              href="mailto:info@fasasmartech.com"
              className="text-orange-600 hover:underline"
            >
              info@fasasmartech.com
            </a>
            .
          </p>

          <div className="space-y-1">
            <p>Fasa Smartech (Private) Limited</p>
            <p>4th Floor, ZIMPOST HQ,</p>
            <p>J Nyerere &amp; G. Silundika</p>
            <p>Harare</p>
            <p>Zimbabwe</p>
            <p>Phone : +263 787 868 099</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
