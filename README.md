# **SOAR TASK**

This project was created as part of the recruitment process for Soar, featuring two fully designed pages: the Dashboard and the Settings page.

## **About**

This project was assigned by Soar as part of the recruitment process, with the objective of accurately replicating a provided design while meeting specific requirements. It enables users to manage their cards, view Transaction History, monitor Weekly Activity, analyze Expense Statistics, perform Quick Transfers, review Balance History, and update their profile.

## **Demo**

Try the live demo [here](https://soar-web-blush.vercel.app/dashboard)

## **Assumptions**

1. This project is built using **Next.js** with **Tailwind CSS** as the styling framework.

2. **Node.js version**: `v21.6.2`  
   **npm version**: `10.2.4`

3. **Form Handling**:

   - The project implements **React Hook Form** for managing form workflows.
   - **Yup** is used for form validation.

4. **Charts**:

   - The dashboard charts are generated using the [**Recharts**](https://recharts.org/en-US/) library.
   - Note: Some chart designs may differ slightly from the original design.

5. **State Management**:

   - **React Context API** is used for state management in certain components based on specific requirements.

6. **Icons**:

   - Icons are implemented using the [**react-icons**](https://react-icons.github.io/react-icons/) library with the **Material Design Icon** set.
   - This choice prioritizes simplicity and faster development.
   - In real applications, the designated icon set must be used to align with the company's branding and design guidelines.

7. **Routing**:

   - The project uses **Next.js built-in routing** for navigation.

8. **Completed Pages**:

   - The **Dashboard** and **Settings** pages are fully completed.
   - Other sidebar menu items redirect to a custom **"Not Found/Under Construction"** page.

9. **Tabs**:

   - The **Preferences** and **Settings** tabs are included but marked as under construction.

10. **Card List Design**:

    - The **"My Cards"** section on the Dashboard is non-scrollable to encourage users to view the full card list on a dedicated **Card List** page via the "See All" button.

11. **Card List Page**:

    - A simple **Card List** page is added to allow users to view their full list of cards without scrolling through the Dashboard.
    - Pagination is not implemented, as the dummy API simulates limited data.
    - In production, implementing pagination is considered best practice.

12. **Recent Transactions**:

    - The **Recent Transactions** section is scrollable but does not include pagination, as it is intended to display only a few recent activities.

13. **Dummy APIs**:

    - The project uses **dummy APIs** to simulate data flow and application integration.

14. **Login Simulation**:

    - A **Login endpoint** is included to simulate the generation of an access token for use across various pages.
    - For demonstration purposes, this endpoint is invoked in the root component instead of during a real login process.
    - This approach is acknowledged as unsuitable for production.

15. **Authentication**:

    - A hardcoded **JWT token** is used for simulation purposes and stored in an **HttpOnly cookie** to simulate best practices.
    - The cookie's `maxAge` is approximately one year, ensuring extended access during testing.

16. **Pagination**:
    - Pagination is omitted in the **Card List** and **Recent Transactions** sections due to the limited data provided by the dummy API. However, it is acknowledged that pagination is a critical feature for production applications.

## **Installation**

1. Clone the repository:

   ```bash
   git clone <https://github.com/Bahamut10/soar-web.git>
   ```

2. Navigate to the project directory:

   ```bash
   cd soar-web/
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## **Usage**

Once the app is running, navigate to `http://localhost:3000/dashboard` in your browser.
